import type * as Figma from "@figma/rest-api-spec";

import type { IconMetadata } from "../metadata/icon";
import type { metadata } from "../metadata/metadata";

/**
 * Parses metadata from the specified Figma node that represents an icon.
 * @param node Node of the icon.
 * @param parentNode Parent node of the icon.
 * @returns Metadata for the icon.
 */
export function parseMetadata(node: Figma.ComponentNode, parentNode: Figma.ComponentSetNode): Readonly<IconMetadata> {
	// Initialize a default set of metadata.
	const icon: Omit<IconMetadata, "name"> = {
		color: true,
		size: "m",
		style: "outlined",
	};

	// Parse and validate the properties from name of the node.
	for (const prop of node.name.split(", ")) {
		const [key, value] = prop.split("=");

		switch (key.trim()) {
			case "Color":
				icon.color = value?.trim()?.toLowerCase() === "true";
				break;

			case "Size":
				const size = value?.trim()?.toLowerCase() || "m";
				if (size !== "s" && size !== "m" && size !== "l") {
					throw new Error(
						`Failed to parse "${parentNode.name} (${node.name})": Expected size to be "S", "M", or  "L", but was "${size}"`,
					);
				}

				icon.size = value.toLowerCase() as metadata.Size;
				break;

			case "Style":
				const style = value?.trim()?.toLowerCase() || "outlined";
				if (style !== "outlined" && style !== "filled") {
					throw new Error(
						`Failed to parse "${parentNode.name} (${node.name})": Expected style to be "Outlined" or "Filled", but was "${style}"`,
					);
				}

				icon.style = style;
				break;

			default:
				console.warn(`Unknown property "${key}=${value}" (${parentNode.name}, "${node.name}")`);
		}
	}

	return {
		...icon,
		name: {
			lowerCase: parseLowerCaseName(),
			original: parseOriginalName(),
		},
	};

	/**
	 * Parses the "original" name from the parent node.
	 * @param icon The icon's metadata.
	 * @returns The icon name.
	 */
	function parseOriginalName(): string {
		let name = parentNode.name
			.split(",")
			.at(0)!
			// Remove "Icon" prefix.
			.replace(/^Icon\s*/, "");

		if (icon.style === "filled") {
			name += "Filled";
		}

		if (icon.color) {
			name += "Color";
		}

		return name;
	}

	/**
	 * Parses the lower-case name variant of the icon.
	 * @returns The icon name.
	 */
	function parseLowerCaseName(): string {
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

		if (icon.style === "filled") {
			name += "--filled";
		}

		if (icon.color) {
			name += "--color";
		}

		return name;
	}
}
