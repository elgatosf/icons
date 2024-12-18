import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { type SvgIcon, type Transformer } from "../transformer.js";

export class MetadataTransformer implements Transformer {
	readonly name = "Metadata";

	async initialize(ctx: TransformerContext): Promise<void> {
		await mkdir(join(ctx.srcDir, "metadata", "generated"), { recursive: true });
	}

	async transform(ctx: TransformerContext, icon: SvgIcon): Promise<void> {
		// Add the icon to the context for the index generation
		ctx.addIcon(icon);
	}

	async finalize(ctx: TransformerContext): Promise<void> {
		const contents = `// This file is auto-generated. Do not edit.

export type Size = "s" | "m" | "l";

export const icons = ${JSON.stringify(
			ctx.icons.map((icon) => ({
				name: icon.name,
				exportName: icon.exportName,
				sizes: Array.from(icon.sizes.keys()),
			})),
			null,
			2
		)} as const;

export type IconName = typeof icons[number]["name"];
`;

		await writeFile(join(ctx.srcDir, "metadata", "generated", "index.ts"), contents);
	}
}
