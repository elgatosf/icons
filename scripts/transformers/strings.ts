import type { Size } from "../../src/catalogue/index.ts";
import type { SvgIcon } from "../transformer.ts";
import { Transformer, type TransformerContext } from "../transformer.ts";

/**
 * Transformer that exports the SVG icons as strings.
 */
export class StringsTransformer extends Transformer {
	/**
	 * @inheritdoc
	 */
	public override name = "String exports";

	/**
	 * Catalogue of icons for each size.
	 */
	#catalogues = new Map<Size, Catalogue>([
		["s", new Catalogue()],
		["m", new Catalogue()],
		["l", new Catalogue()],
	]);

	/**
	 * @inheritdoc
	 */
	public override finalize(ctx: TransformerContext): void {
		for (const [size, { names, indexContents }] of this.#catalogues) {
			// Ignore empty catalogues.
			if (names.length === 0) {
				continue;
			}

			ctx.write(`${this.#pathOf(size)}/index.ts`, indexContents);
		}
	}

	/**
	 * @inheritdoc
	 */
	public override async transform(ctx: TransformerContext, icon: SvgIcon): Promise<void> {
		for (const [size, { svg }] of icon.sizes) {
			const str = svg.replace(/\r?\n\s*/g, "");
			await ctx.write(
				`${this.#pathOf(size)}/icons/${icon.name}.ts`,
				`const icon: string = '${str}'\nexport default icon`,
			);

			const catalogue = this.#catalogues.get(size)!;
			catalogue.names.push(icon.name);
			catalogue.indexContents += `export { default as ${icon.exportName} } from "./icons/${icon.name}.js";\n`;
		}
	}

	/**
	 * Gets the directory path of the specified size.
	 * @param size Size.
	 * @returns Directory for the size.
	 */
	#pathOf(size: Size): string {
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
	 * String that represents the index (barrel file) of the catalogue.
	 */
	public indexContents: string = "";
}
