import { existsSync } from "fs";
import { rm } from "fs/promises";

import { metadata } from "../metadata/metadata.ts";
import type { SvgIcon, Transformer } from "../transformer.ts";
import * as utils from "../utils.ts";

/**
 * Transformer that exports the SVG icons as strings.
 */
export class StringsTransformer implements Transformer {
	/**
	 * @inheritdoc
	 */
	public readonly name = "String exports";

	/**
	 * Catalogue of icons for each size.
	 */
	#catalogues = new Map<metadata.Size, Catalogue>([
		["s", new Catalogue()],
		["m", new Catalogue()],
		["l", new Catalogue()],
	]);

	/**
	 * @inheritdoc
	 */
	public async finalize(): Promise<void> {
		for (const [size, { names, exports }] of this.#catalogues) {
			// Ignore empty catalogues.
			if (names.length === 0) {
				continue;
			}

			const contents = exports
				.sort((a, b) => a.identifier.localeCompare(b.identifier))
				.map(({ filename, identifier }) => `export { default as ${identifier} } from "${filename}";`)
				.join("\n");

			await utils.writeGeneratedFile(`${this.#pathOf(size)}/index.ts`, contents);
		}
	}

	/**
	 * @inheritdoc
	 */
	public async initialize(): Promise<void> {
		// Clean up the old icons.
		for (const [size] of this.#catalogues) {
			const dir = utils.resolve("src/strings", size);
			if (existsSync(dir)) {
				await rm(dir, { recursive: true });
			}
		}
	}

	/**
	 * @inheritdoc
	 */
	public async transform(icon: SvgIcon): Promise<void> {
		for (const [size, { svg }] of icon.sizes) {
			const str = svg.replace(/\r?\n\s*/g, "");
			await utils.writeGeneratedFile(
				`${this.#pathOf(size)}/icons/${icon.name}.ts`,
				`const icon: string = '${str}'\nexport default icon`,
			);

			const catalogue = this.#catalogues.get(size)!;
			catalogue.names.push(icon.name);
			catalogue.exports.push({
				identifier: metadata.getSvgStringMetadata(icon.name as keyof typeof metadata.icons).exportName,
				filename: `./icons/${icon.name}.g.js`,
			});
		}
	}

	/**
	 * Gets the directory path of the specified size.
	 * @param size Size.
	 * @returns Directory for the size.
	 */
	#pathOf(size: metadata.Size): string {
		return `src/strings/${size}`;
	}
}

/**
 * Catalogue of icons.
 */
class Catalogue {
	/**
	 * Icons names within the catalogue.
	 */
	public readonly names: string[] = [];

	/**
	 * Icons exported from the index file.
	 */
	public exports: utils.ExportSpecifier[] = [];
}
