import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

import type { Size } from "../src/catalogue/index.ts";

/**
 * Transformer responsible for transforming icons from SVG.
 */
export abstract class Transformer {
	/**
	 * Name of the transformer.
	 */
	public abstract readonly name: string;

	/**
	 * Finalizes the transformer; this is called after all icons have been transformed.
	 * @param ctx Transformer context.
	 */
	public finalize?(ctx: TransformerContext): void;

	/**
	 * Transforms an icon.
	 * @param ctx Transformer context.
	 * @param icon Icon to transform.
	 */
	public abstract transform(ctx: TransformerContext, icon: SvgIcon): Promise<void> | void;
}

/**
 * Provides context for a transformer.
 */
export class TransformerContext {
	/**
	 * Writes the specified data to the path, relative to the project root.
	 * @param path Path, relative to the project root, where the file should be written.
	 * @param data Data to write to the file.
	 */
	async write(path: string, data: string): Promise<void> {
		const file = join(import.meta.dirname, "..", path);

		// Create the parent directory if it does not exist.
		const parent = dirname(file);
		if (!existsSync(parent)) {
			await mkdir(parent, { recursive: true });
		}

		await writeFile(file, data, { encoding: "utf8", flag: "w" });
	}
}

/**
 * An SVG icon.
 */
export type SvgIcon = {
	/**
	 * Name the icon should be exported as.
	 */
	exportName: string;

	/**
	 * Name of the icon, derived from the name of the source file with the extension omitted.
	 */
	name: string;

	/**
	 * Sizes the icon is available in.
	 */
	sizes: Map<Size, SvgIconSize>;
};

/**
 * Instance of an icon size.
 */
export type SvgIconSize = {
	/**
	 * SVG contents of the icon.
	 */
	svg: string;
};
