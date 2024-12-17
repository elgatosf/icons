import type { Size } from "../../src/metadata/sizing.ts";
import { type SvgIcon, Transformer, type TransformerContext } from "../transformer.ts";

/**
 * Formats the specified icons (as a partial JSON object) to the metadata's contents.
 * @param icons The icons.
 * @returns Output contents of the metadata.
 */
const format = (icons: string) => `
/**
 * Collection of available icons, and their associated metadata.
 */
export const icons = {
    ${icons}
} as const;
`;

/**
 * Transformer that generates the metadata of icons.
 */
export class MetadataTransformer extends Transformer {
	/**
	 * String builder used to collate the icons within the metadata.
	 */
	#iconsContent: string = "";

	/**
	 * @inheritdoc
	 */
	public name = "Metadata";

	/**
	 * @inheritdoc
	 */
	public override finalize(ctx: TransformerContext): Promise<void> {
		return ctx.write("src/metadata/icons.ts", format(this.#iconsContent));
	}

	/**
	 * @inheritdoc
	 */
	public override transform(ctx: TransformerContext, icon: SvgIcon): void {
		this.#iconsContent += `"${icon.name}": { sizes: ${JSON.stringify(this.#getOrderedSizes(icon))} },`;
	}

	/**
	 * Gets the available sizes of an icon, as an ordered array, for example `["s", "m", "l"]`.
	 * @param icon Icon.
	 * @returns Array of sizes.
	 */
	#getOrderedSizes(icon: SvgIcon): Size[] {
		const weights: Size[] = ["s", "m", "l"];
		return Array.from(icon.sizes.keys()).sort((a, b) => weights.indexOf(a) - weights.indexOf(b));
	}
}
