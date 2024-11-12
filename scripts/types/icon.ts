/**
 * An icon.
 */
export type Icon = {
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
	sizes: Map<Size, IconSize>;
};

/**
 * Size of an icon, denoted as a shirt size.
 */
export type Size = "s" | "m" | "l";

/**
 * Instance of an icon size.
 */
export type IconSize = {
	/**
	 * SVG contents of the icon.
	 */
	svg: string;
};
