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
	 * Name of the icon.
	 */
	public readonly name: string;

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

		this.name = this.#parseName(parentNode);
	}

	/**
	 * Parses the name of the icon.
	 * @param parentNode Parent node of the icon.
	 * @returns The icon name.
	 */
	#parseName(parentNode: Figma.ComponentSetNode): string {
		let name = parentNode.name
			.split(",")
			.at(0)!
			// Remove "Icon" prefix.
			.replace(/^Icon\s*/, "")
			// Handle numbers, e.g. 10Square -> 10-Square
			.replace(/(\d+)([A-Z][a-z]*)/g, "$1-$2")
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
