import { mkdir, writeFile, readdir, unlink } from "node:fs/promises";
import { join } from "node:path";
import { type SvgIcon, type Transformer } from "../transformer.js";
import { getSvgStringMetadata } from "../../src/metadata/providers.js";

function formatComponentName(name: string): string {
	// Convert kebab-case to camelCase while preserving numbers
	// e.g., "10-circle--filled" -> "10CircleFilled"
	return name
		.split(/[-_]/)
		.map((part, index) => {
			// Skip empty parts (from double hyphens)
			if (!part) return '';
			// Keep numbers as is for the first part
			if (index === 0 && /^\d+$/.test(part)) return part;
			// Capitalize the first letter of other parts
			return part.charAt(0).toUpperCase() + part.slice(1);
		})
		.join('');
}

export class StringsTransformer implements Transformer {
	readonly name = "String exports";

	async transform(ctx: TransformerContext, icon: SvgIcon): Promise<void> {
		const exportName = formatComponentName(icon.name);

		// Process each size variant
		for (const [size, { svg }] of icon.sizes.entries()) {
			// Clean up old files with the same base name but different casing/format
			try {
				const files = await readdir(join(ctx.srcDir, "strings", size));
				const oldFiles = files.filter(file => 
					file.toLowerCase().startsWith(icon.name.toLowerCase()) && 
					file.endsWith('.ts') &&
					file !== `${exportName}.ts`
				);
				
				for (const oldFile of oldFiles) {
					await unlink(join(ctx.srcDir, "strings", size, oldFile));
				}

				// Also clean up dist directory
				const distFiles = await readdir(join(ctx.outDir, "strings", size));
				const oldDistFiles = distFiles.filter(file => 
					file.toLowerCase().startsWith(icon.name.toLowerCase()) && 
					file.endsWith('.js') &&
					file !== `${exportName}.js`
				);
				
				for (const oldFile of oldDistFiles) {
					await unlink(join(ctx.outDir, "strings", size, oldFile));
				}
			} catch (error) {
				console.warn(`Warning: Could not clean up old files for ${icon.name} (size ${size}):`, error);
			}

			const contents = `export const ${exportName} = ${JSON.stringify(svg)};`;
			
			// Write to src
			await writeFile(join(ctx.srcDir, "strings", size, `${exportName}.ts`), contents);
			
			// Write to dist
			await writeFile(join(ctx.outDir, "strings", size, `${exportName}.js`), contents);
		}
	}

	async finalize(ctx: TransformerContext): Promise<void> {
		// Generate index files for each size
		const sizes = ['s', 'm', 'l'];
		for (const size of sizes) {
			const icons = ctx.icons.filter(icon => icon.sizes.has(size));
			if (icons.length === 0) continue;

			const contents = icons
				.map(icon => {
					const exportName = formatComponentName(icon.name);
					return `export { ${exportName} } from "./${exportName}.js";`;
				})
				.join("\n");

			// Write to src
			await writeFile(join(ctx.srcDir, "strings", size, "index.ts"), contents);
			
			// Write to dist
			await writeFile(join(ctx.outDir, "strings", size, "index.js"), contents);
		}

		// Generate root index file that exports size-specific indices
		const rootContents = sizes
			.filter(size => ctx.icons.some(icon => icon.sizes.has(size)))
			.map(size => `export * as ${size} from "./${size}/index.js";`)
			.join("\n");

		// Write to src
		await writeFile(join(ctx.srcDir, "strings", "index.ts"), rootContents);
		
		// Write to dist
		await writeFile(join(ctx.outDir, "strings", "index.js"), rootContents);
	}
}
