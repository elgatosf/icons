import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { type SvgIcon, type Transformer } from "../transformer.js";

export class MetadataTransformer implements Transformer {
	readonly name = "Metadata";

	async transform(ctx: TransformerContext, icon: SvgIcon): Promise<void> {
		// Add the icon to the context for the index generation
		ctx.addIcon(icon);
	}

	async finalize(ctx: TransformerContext): Promise<void> {
		// Generate the metadata index
		const contents = `
import type { SvgIcon } from "./types.js";

export type Size = "s" | "m" | "l";

export const icons: SvgIcon[] = ${JSON.stringify(ctx.icons, null, 2)};
`.trim();

		await writeFile(join(ctx.outDir, "metadata", "index.ts"), contents);
	}
}
