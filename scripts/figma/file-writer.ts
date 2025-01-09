import { join } from "path";

import * as utils from "../utils.ts";
import { aggregateMetadata, type IconMetadata } from "./metadata.ts";

/**
 * Optimizes the SVG contents, before writing it to its local file.
 * @param metadata Icon metadata.
 * @param svg SVG contents for the icon.
 */
export async function writeSvgFile(metadata: IconMetadata, svg: string): Promise<void> {
	const data = optimizeSvg(svg, metadata.color);
	const outputPath = getOutputPath(metadata);

	return utils.writeFile(outputPath, data);
}

/**
 * Writes the icons metadata file, indexed by their SVG file name.
 * @param icons Icons that were generated.
 */
export async function writeIconsMetadataFile(icons: IconMetadata[]): Promise<void> {
	const contents = `
/**
 * Collection of available icons, and their associated metadata.
 */
export const icons = ${JSON.stringify(aggregateMetadata(icons))} as const;
`;

	return utils.writeGeneratedFile("src/metadata/icons.ts", contents);
}

/**
 * Gets the output path of the SVG based on its metadata.
 * @param metadata SVG metadata.
 * @returns Output path.
 */
function getOutputPath(metadata: IconMetadata): string {
	const getSizeDir = () => {
		switch (metadata.size) {
			case "s":
				return "16";
			case "m":
				return "24";
			case "l":
				return "32";
			default:
				throw new Error(`Failed to determine directory name for size: ${metadata.size}`);
		}
	};

	return join("svg", getSizeDir(), `${metadata.name.lowerCase}.svg`);
}

/**
 * Optimizes the contents of an SVG.
 * @param svg The SVG contents.
 * @param preserveColors Determines whether to preserver the original color of the SVG.
 * @returns Optimized SVG.
 */
function optimizeSvg(svg: string, preserveColors: boolean): string {
	svg = svg
		// Remove comments
		.replace(/<!--.*?-->/g, "")
		// Remove empty groups
		.replace(/<g[^>]*?>\s*<\/g>/g, "")
		// Remove unnecessary whitespace between tags
		.replace(/>\s+</g, "><")
		// Remove empty lines and trim
		.replace(/^\s+|\s+$/gm, "")
		// Remove unnecessary spaces in attributes
		.replace(/\s*=\s*"/g, '="')
		// Remove data-name attributes
		.replace(/\s*data-name="[^"]*"/g, "")
		// Remove empty newlines
		.replace(/\n\s*\n/g, "\n")
		// Ensure single quotes are converted to double quotes for consistency
		.replace(/'/g, '"')
		// Preserve xlink namespace
		.replace(/xmlns:xlink="[^"]*"/, 'xmlns:xlink="http://www.w3.org/1999/xlink"')
		// Remove any empty style attributes
		.replace(/\s*style=""/g, "")
		// Remove any empty class attributes
		.replace(/\s*class=""/g, "")
		.trim();

	if (!preserveColors) {
		// Extract the root SVG element's opening tag
		const svgTagMatch = svg.match(/<svg[^>]*>/);
		if (svgTagMatch) {
			const svgTag = svgTagMatch[0];

			// Add fill="currentColor" to the root SVG if it doesn't have a fill
			const newSvgTag = svgTag.includes('fill="')
				? svgTag.replace(/fill="[^"]*"/, 'fill="currentColor"')
				: svgTag.replace(/>$/, ' fill="currentColor">');

			// Replace the original SVG tag
			svg = svg.replace(svgTag, newSvgTag);

			// Remove all fill attributes from child elements
			svg = svg.replace(/\s+fill="[^"]*"/g, "");

			// Re-add the fill attribute to the root SVG element
			svg = svg.replace(/<svg[^>]*>/, newSvgTag);
		}
	}

	return svg;
}
