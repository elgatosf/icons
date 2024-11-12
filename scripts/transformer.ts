import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

import type { Icon } from "./types/icon";

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
	public abstract transform(ctx: TransformerContext, icon: Icon): Promise<void> | void;
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
