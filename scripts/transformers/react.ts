import { transform } from "@svgr/core";
import { writeFile, mkdir, readdir, unlink } from "node:fs/promises";
import { join } from "node:path";
import { type SvgIcon, type Transformer } from "../transformer.js";
import { getReactComponentMetadata } from "../../src/metadata/providers.js";

function cleanSvg(svg: string): string {
	// Remove any XML declaration
	svg = svg.replace(/<\?xml[^>]*\?>\s*/, '');
	
	// Remove any DOCTYPE declaration
	svg = svg.replace(/<!DOCTYPE[^>]*>\s*/, '');
	
	// Find the SVG element and its content
	const match = svg.match(/<svg[^>]*>[\s\S]*?<\/svg>/);
	if (!match) {
		throw new Error('Invalid SVG: No root SVG element found');
	}
	return match[0];
}

function formatComponentName(name: string): string {
	// Convert kebab-case to camelCase while preserving numbers
	return name
		.split(/[-_]/)
		.map((part, index) => {
			// Skip empty parts (from double hyphens)
			if (!part) return '';
			// Capitalize the first letter of each part
			return part.charAt(0).toUpperCase() + part.slice(1);
		})
		.join('');
}

const svgrConfig = {
	plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
	svgoConfig: {
		multipass: true,
		plugins: [
			{
				name: 'preset-default',
				params: {
					overrides: {
						removeViewBox: false,
						removeUnknownsAndDefaults: false,
						cleanupIds: false,
						mergePaths: false,
						removeUselessDefs: false,
						collapseGroups: false,
						convertColors: false,
						convertPathData: false,
						removeComments: false,
						removeDesc: false,
						removeTitle: false,
						removeEmptyAttrs: false,
						removeEmptyContainers: false,
						removeEmptyText: false,
						removeHiddenElems: false,
						removeMetadata: false,
						removeUnusedNS: false,
						removeXMLProcInst: false
					}
				}
			},
			'removeDimensions',
			{
				name: 'removeAttrs',
				params: {
					attrs: ['xmlns']
				}
			},
			{
				name: 'prefixIds',
				params: {
					prefixIds: false,
					prefixClassNames: false
				}
			}
		]
	},
	typescript: true,
	jsxRuntime: "automatic",
	exportType: "default",
	dimensions: false,
	prettierConfig: {
		parser: "typescript",
		singleQuote: true,
		useTabs: true,
		printWidth: 100,
	}
};

export class ReactTransformer implements Transformer {
	readonly name = "React components";

	async initialize(ctx: TransformerContext) {
		// Clean up src directory
		const srcIconsDir = join(ctx.srcDir, "react", "icons");
		await mkdir(srcIconsDir, { recursive: true });
		try {
			const srcFiles = await readdir(srcIconsDir);
			await Promise.all(
				srcFiles.map(file => unlink(join(srcIconsDir, file)))
			);
		} catch (error) {
			console.warn('Warning: Could not clean up src React exports:', error);
		}
	}

	async transform(ctx: TransformerContext, icon: SvgIcon): Promise<void> {
		const componentName = formatComponentName(icon.name);
		const components = await Promise.all(
			Array.from(icon.sizes.entries()).map(async ([size, { svg }]) => {
				try {
					// Clean the SVG before transformation
					let cleanedSvg;
					try {
						cleanedSvg = cleanSvg(svg);
					} catch (error) {
						console.error(`Error cleaning SVG for ${icon.name} (size ${size}):`, error);
						console.error('Original SVG:', svg);
						throw error;
					}
					
					let paths;
					try {
						const result = await transform(
							cleanedSvg,
							{
								...svgrConfig,
								plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
								template: ({ jsx }) => jsx
							}
						);
						paths = result.match(/<svg[^>]*>(.*?)<\/svg>/s)?.[1] ?? '';
					} catch (error) {
						console.error(`Error transforming SVG for ${icon.name} (size ${size}):`, error);
						console.error('Cleaned SVG:', cleanedSvg);
						throw error;
					}

					return {
						size,
						paths,
					};
				} catch (error) {
					console.error(`Failed to process icon ${icon.name} (size ${size}):`, error);
					throw error;
				}
			})
		);

		// Write the component file
		const component = `import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ${componentName} = ({ size = "m", label = "Icon", ...props }: IconProps) => {
	const iconSize = sizeMap[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={iconSize}
			height={iconSize}
			aria-label={label}
			role="img"
			{...props}
		>
			${components[0].paths}
		</svg>
	);
};

${componentName}.iconName = "${icon.name}";

export default ${componentName};`;

		await writeFile(
			join(ctx.srcDir, "react", "icons", `${componentName}.g.tsx`), 
			component
		);
	}

	async finalize(ctx: TransformerContext): Promise<void> {
		// Write the index file to src/react/icons
		const contents = ctx.icons
			.map((icon) => {
				const componentName = formatComponentName(icon.name);
				return `export { default as ${componentName} } from "./${componentName}.g";`;
			})
			.join("\n");

		await writeFile(join(ctx.srcDir, "react", "icons", "index.ts"), contents);
	}
}
