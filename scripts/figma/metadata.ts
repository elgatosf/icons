import type * as Figma from "@figma/rest-api-spec";

import type { Size } from "../../src/metadata/sizing.ts";

/**
 * Metadata for an icon within a Figma file.
 */
export class IconMetadata {
	/**
	 * Determines whether the color should be preserved.
	 */
	public readonly color: boolean = false;

	/**
	 * Names of the icon.
	 */
	public readonly name: IconName;

	/**
	 * Size of the icon.
	 */
	public readonly size: Size = "m";

	/**
	 * Style of the icon.
	 */
	public readonly style: "outlined" | "filled" = "outlined";

	/**
	 * Original node of the icon.
	 */
	public readonly node: Figma.ComponentNode;

	/**
	 * Initializes a new instance of the {@link IconMetadata} class.
	 * @param node Node of the icon.
	 * @param parentNode Parent node of the icon.
	 */
	constructor(node: Figma.ComponentNode, parentNode: Figma.ComponentSetNode) {
		this.node = node;

		// Parse and validate the properties from name of the node.
		for (const prop of node.name.split(", ")) {
			const [key, value] = prop.split("=");

			switch (key.trim()) {
				case "Color":
					this.color = value?.trim()?.toLowerCase() === "true";
					break;

				case "Size":
					const size = value?.trim()?.toLowerCase() || "m";
					if (size !== "s" && size !== "m" && size !== "l") {
						throw new Error(
							`Failed to parse "${parentNode.name} (${node.name})": Expected size to be "S", "M", or  "L", but was "${size}"`,
						);
					}

					this.size = value.toLowerCase() as Size;
					break;

				case "Style":
					const style = value?.trim()?.toLowerCase() || "outlined";
					if (style !== "outlined" && style !== "filled") {
						throw new Error(
							`Failed to parse "${parentNode.name} (${node.name})": Expected style to be "Outlined" or "Filled", but was "${style}"`,
						);
					}

					this.style = style;
					break;

				default:
					console.warn(`Unknown property "${key}=${value}" (${parentNode.name}, "${node.name}")`);
			}
		}

		this.name = {
			lowerCase: this.#parseLowerCaseName(parentNode),
			original: this.#parseOriginalName(parentNode),
		};
	}

	/**
	 * Parses the "original" name from the parent node.
	 * @param parentNode Parent node of the icon.
	 * @returns The icon name.
	 */
	#parseOriginalName(parentNode: Figma.ComponentSetNode): string {
		let name = parentNode.name
			.split(",")
			.at(0)!
			// Remove "Icon" prefix.
			.replace(/^Icon\s*/, "");

		if (this.style === "filled") {
			name += "Filled";
		}

		if (this.color) {
			name += "Color";
		}

		return name;
	}

	/**
	 * Parses the lower-case name variant of the icon.
	 * @param parentNode Parent node of the icon.
	 * @returns The icon name.
	 */
	#parseLowerCaseName(parentNode: Figma.ComponentSetNode): string {
		let name = parentNode.name
			.split(",")
			.at(0)!
			// Remove "Icon" prefix.
			.replace(/^Icon\s*/, "")
			// Handle numbers, e.g. 10Square -> 10-Square
			.replace(/(\d+)([A-Z][a-z]*)/g, "$1-$2")
			// Split words, e.g. MarginXIncrease -> Margin-X-Increase
			.replace(/([a-z])([A-Z]{1,})([A-Z])/g, "$1-$2-$3")
			// Split words, e.g. ZoomIn -> Zoom-In
			.replace(/([a-z])([A-Z])/g, "$1-$2")
			.toLowerCase();

		if (this.style === "filled") {
			name += "--filled";
		}

		if (this.color) {
			name += "--color";
		}

		return name;
	}
}

/**
 * Aggregates the icons metadata to be indexed by the icon's file name (without the extension).
 * @param icons Icons to aggregate.
 * @returns The aggregated collection of metadata
 */
export function aggregateMetadata(icons: IconMetadata[]): IconMetadataCollection {
	const db: IconMetadataCollection = {};

	for (const icon of icons.sort((a, b) => a.name.lowerCase.localeCompare(b.name.lowerCase))) {
		if (icon.name.lowerCase in db) {
			// Icon exists, add the size in order, and ensure sizes are distinct.
			db[icon.name.lowerCase].sizes = [...new Set([icon.size, ...db[icon.name.lowerCase].sizes].sort(compareSize))];
		} else {
			// Add the icon to the aggregate collection.
			db[icon.name.lowerCase] = {
				name: icon.name.original,
				sizes: [icon.size],
			};
		}
	}

	return db;
}

/**
 * Gets the available sizes of an icon, as an ordered array, for example `["s", "m", "l"]`.
 * @param icon Icon.
 * @returns Array of sizes.
 */
function compareSize(a: Size, b: Size): number {
	const weights: Size[] = ["s", "m", "l"];
	return weights.indexOf(a) - weights.indexOf(b);
}

/**
 * Names of an icon, in different formats.
 */
type IconName = {
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
 * An aggregation of icon metadata, indexed by the icons file name (without the extension).
 */
type IconMetadataCollection = {
	[filename: string]: Icon;
};

/**
 * An icon.
 */
type Icon = {
	/**
	 * Original name of the icon.
	 */
	name: string;

	/**
	 * Sizes the icon is available in.
	 */
	sizes: Size[];
};
