/**
 * Info entry from the generated info.json file.
 */
export type FontInfoEntry = {
	encodedCode: string;
	prefix: string;
	className: string;
	unicode: string;
};

/**
 * Parsed icon entry with structured data.
 */
export type ParsedIconEntry = {
	/** Key for legacy XAML format (e.g., "icon-accessibility-l-outlined") */
	legacyXamlKey: string;
	/** Key for CSS-style XAML format (e.g., "accessibility-l") */
	cssXamlKey: string;
	/** C# property name (e.g., "Accessibility_L_Outlined") */
	csharpName: string;
	/** Hex code for the glyph (e.g., "EA01") */
	hexCode: string;
	/** True if this entry was synthesized (l/m duplication), not from an actual icon */
	isSynthetic: boolean;
};
