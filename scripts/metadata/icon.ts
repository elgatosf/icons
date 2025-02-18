import type { metadata } from "./metadata";

/**
 * Metadata parsed from a Figma node.
 */
export type IconMetadata = {
	/**
	 * Determines whether the color should be preserved.
	 */
	color: boolean;

	/**
	 * Names of the icon.
	 */
	name: {
		/**
		 * Lower-case format, with each word separated by hyphens.
		 */
		lowerCase: string;

		/**
		 * Original name from Figma, with the "Icon" prefix removed.
		 */
		original: string;
	};

	/**
	 * Size of the icon.
	 */
	size: metadata.Size;

	/**
	 * Style of the icon.
	 */
	style: "outlined" | "filled";
};
