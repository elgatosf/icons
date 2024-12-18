import { Api } from 'figma-api';
import { promises as fs } from 'fs';
import path from 'path';
import { type Config, optimize } from 'svgo';
import * as dotenv from 'dotenv';
import { setTimeout } from 'timers/promises';

dotenv.config();

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;

interface IconInfo {
  name: string;
  folder: string;
  preserveColors: boolean;
}

interface ComponentProps {
  size?: 's' | 'm' | 'l';
  style?: 'outline' | 'filled';
  color?: boolean;
}

const SIZE_FOLDERS = {
  s: 'svg/16',
  m: 'svg/20',
  l: 'svg/24',
} as const;

const figma = new Api({
  personalAccessToken: FIGMA_ACCESS_TOKEN!
});

function formatIconName(name: string): string {
  // Remove "Icon" prefix and any variant info
  name = name.split(',')[0].replace(/^Icon\s*/, '');
  
  // Handle numbers in names (e.g., Icon10Square -> 10-square)
  return name
    .replace(/(\d+)([A-Z][a-z]*)/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

async function optimizeSvg(svgContent: string, preserveColors: boolean): Promise<string> {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const [, , , width, height] = viewBoxMatch?.[1].split(' ').map(Number) || [];

  const result = optimize(svgContent, {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            removeTitle: false,
            removeDesc: false,
            convertColors: {
              currentColor: preserveColors ? false : true
            }
          }
        }
      },
      {
        name: 'removeDimensions'
      },
      {
        name: 'sortAttrs'
      }
    ]
  });

  return result.data;
}

interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  componentId?: string;
  componentSetId?: string;
  componentPropertyDefinitions?: {
    Size?: {
      type: string;
      defaultValue: string;
      variantOptions: string[];
    };
    Style?: {
      type: string;
      defaultValue: string;
      variantOptions: string[];
    };
    Color?: {
      type: string;
      defaultValue: string;
      variantOptions: string[];
    };
  };
}

function findIconComponents(node: FigmaNode): { set: FigmaNode, variants: FigmaNode[] }[] {
  const results: { set: FigmaNode, variants: FigmaNode[] }[] = [];
  
  if (node.type === 'COMPONENT_SET' && node.name.startsWith('Icon')) {
    const variants = node.children?.filter(child => child.type === 'COMPONENT') || [];
    results.push({ set: node, variants });
  }
  
  // Continue searching in children
  if (node.children) {
    for (const child of node.children) {
      results.push(...findIconComponents(child));
    }
  }
  
  return results;
}

async function processComponent(component: FigmaNode, componentSet: FigmaNode): Promise<IconInfo | null> {
  // Parse variant properties from component name
  const variantProps = component.name.split(', ').reduce((acc: Record<string, string>, part) => {
    const [key, value] = part.split('=').map(s => s.trim());
    if (key && value) acc[key] = value;
    return acc;
  }, {});

  // Get size, style, and color from variants
  const size = (variantProps.Size || 'm').toLowerCase() as 's' | 'm' | 'l';
  const style = (variantProps.Style || 'outlined').toLowerCase();
  const color = variantProps.Color === 'true';

  // Format the base name from the component set name
  const baseName = formatIconName(componentSet.name);
  
  // Build the file name with appropriate suffixes
  let fileName = baseName;
  if (style === 'filled') fileName += '--filled';
  if (color) fileName += '--color';
  fileName += '.svg';

  return {
    name: fileName,
    folder: SIZE_FOLDERS[size],
    preserveColors: color
  };
}

interface FigmaComponent {
  id: string;
  name: string;
  componentSetId?: string;
  props?: ComponentProps;
}

interface FigmaComponentSet {
  id: string;
  name: string;
  components: string[];
}

interface FigmaFile {
  components: { [key: string]: FigmaComponent };
  componentSets: { [key: string]: FigmaComponentSet };
}

// Add exponential backoff retry
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 5,
  initialDelayMs: number = 1000
): Promise<T> {
  let retries = 0;
  while (true) {
    try {
      return await fn();
    } catch (error: any) {
      if (retries >= maxRetries || error?.response?.status !== 429) {
        throw error;
      }
      const delayMs = initialDelayMs * Math.pow(2, retries);
      console.log(`Rate limited. Retrying in ${delayMs}ms...`);
      await setTimeout(delayMs);
      retries++;
    }
  }
}

// Add batch processing helper
async function processBatch<T>(items: T[], batchSize: number, processor: (batch: T[]) => Promise<void>): Promise<void> {
  const chunks = [];
  for (let i = 0; i < items.length; i += batchSize) {
    chunks.push(items.slice(i, i + batchSize));
  }

  // Process chunks with some parallelization but not too much to avoid rate limits
  const PARALLEL_CHUNKS = 3;
  for (let i = 0; i < chunks.length; i += PARALLEL_CHUNKS) {
    const chunkBatch = chunks.slice(i, i + PARALLEL_CHUNKS);
    await Promise.all(chunkBatch.map(processor));
    
    if (i + PARALLEL_CHUNKS < chunks.length) {
      console.log(`Processed ${Math.min((i + PARALLEL_CHUNKS) * batchSize, items.length)}/${items.length} items. Waiting before next batch...`);
      await setTimeout(2000); // Reduced wait time between parallel batches
    }
  }
}

interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  componentId?: string;
  componentSetId?: string;
  componentPropertyDefinitions?: {
    Size?: {
      type: string;
      defaultValue: string;
      variantOptions: string[];
    };
    Style?: {
      type: string;
      defaultValue: string;
      variantOptions: string[];
    };
    Color?: {
      type: string;
      defaultValue: string;
      variantOptions: string[];
    };
  };
}

interface GetFileResult {
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
  document: FigmaNode;
  components: { [key: string]: FigmaComponent };
  componentSets: { [key: string]: FigmaComponentSet };
  schemaVersion: number;
  styles: { [key: string]: any };
  mainFileKey: string;
  branches: any[];
}

async function syncIcons(): Promise<void> {
  try {
    console.log('Creating output directories...');
    await Promise.all(
      Object.values(SIZE_FOLDERS).map(folder => 
        fs.mkdir(folder, { recursive: true })
      )
    );

    console.log('Fetching Figma file...');
    const file = await retryWithBackoff(() => 
      figma.getFile(FIGMA_FILE_ID!)
    ) as unknown as GetFileResult;
    
    console.log('Finding icon components in document...');
    const componentSets = findIconComponents(file.document);
    console.log(`Found ${componentSets.length} icon component sets`);

    if (componentSets.length === 0) {
      console.log('No icon component sets found');
      return;
    }

    // Pre-process component info to avoid repeated async operations
    const componentInfoMap = new Map<string, IconInfo>();
    for (const { set, variants } of componentSets) {
      for (const variant of variants) {
        const iconInfo = await processComponent(variant, set);
        if (iconInfo) {
          componentInfoMap.set(variant.id, iconInfo);
        }
      }
    }

    // Process all variants in parallel batches
    const allVariants = componentSets.flatMap(({ variants }) => variants);
    const BATCH_SIZE = 500;
    await processBatch(allVariants, BATCH_SIZE, async (batch) => {
      const validBatch = batch.filter(c => componentInfoMap.has(c.id));
      if (validBatch.length === 0) return;

      const componentIds = validBatch.map(c => c.id);
      console.log(`Fetching SVGs for batch of ${componentIds.length} components...`);
      
      const svgResponse = await retryWithBackoff(() => 
        figma.getImage(FIGMA_FILE_ID!, {
          ids: componentIds.join(','),
          format: 'svg',
          scale: 1
        })
      );

      if (!svgResponse.images || Object.keys(svgResponse.images).length === 0) {
        console.error('No SVGs returned from Figma API for this batch');
        return;
      }

      // Process SVGs in parallel within each batch
      await Promise.all(
        validBatch.map(async (component) => {
          const iconInfo = componentInfoMap.get(component.id)!;
          try {
            const svgUrl = svgResponse.images[component.id];
            if (!svgUrl) {
              console.error(`Failed to get SVG URL for component ${component.id} (${component.name})`);
              return;
            }

            const [response, outputPath] = await Promise.all([
              retryWithBackoff(() => fetch(svgUrl)),
              Promise.resolve(path.join(iconInfo.folder, iconInfo.name))
            ]);

            const svgContent = await response.text();
            const optimizedSvg = await optimizeSvg(svgContent, iconInfo.preserveColors);
            
            await fs.writeFile(outputPath, optimizedSvg);
            console.log(`Successfully processed ${component.name} -> ${iconInfo.name}`);
          } catch (error) {
            console.error(`Error processing component ${component.name}:`, error);
          }
        })
      );
    });

    console.log('Icon sync completed successfully');
  } catch (error) {
    console.error('Error syncing icons:', error);
    process.exit(1);
  }
}

syncIcons(); 