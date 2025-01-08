import type { Size } from "../src/metadata/index.ts";

/**
 * Transformer responsible for transforming icons from SVG.
 */
export interface Transformer {
	/**
	 * Name of the transformer.
	 */
	readonly name: string;

	/**
	 * Finalizes the transformer; this is called after all icons have been transformed.
	 */
	finalize?(): Promise<void> | void;

	/**
	 * Initializes the transformer.
	 */
	initialize?(): Promise<void> | void;

	/**
	 * Transforms an icon.
	 * @param icon Icon to transform.
	 */
	transform(icon: SvgIcon): Promise<void> | void;
}

/**
 * An SVG icon.
 */
export type SvgIcon = {
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
