import type { Size } from "../../src/metadata/sizing.ts";
import type { SvgIcon, Transformer } from "../transformer.ts";
import * as utils from "../utils.ts";

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
export class MetadataTransformer implements Transformer {
	/**
	 * String builder used to collate the icons within the metadata.
	 */
	#iconsContent: string = "";

	/**
	 * @inheritdoc
	 */
	public readonly name = "Metadata";

	/**
	 * @inheritdoc
	 */
	public finalize(): Promise<void> {
		return utils.writeGeneratedFile("src/metadata/icons.ts", format(this.#iconsContent));
	}

	/**
	 * @inheritdoc
	 */
	public transform(icon: SvgIcon): void {
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
