import type * as Figma from "@figma/rest-api-spec";

import type { Size } from "../../src/metadata/sizing.ts";

/**
 * Gets the metadata for all icons within a Figma document.
 * @param document The Figma document.
 * @returns The metadata of the icons, indexed by their node identifier.
 */
export function getIconMetadata(document: Figma.DocumentNode): Map<string, IconMetadata> {
	const icons = new Map<string, IconMetadata>();
	for (const icon of findIcons(document)) {
		for (const variant of icon.variants) {
			icons.set(variant.id, parseMetadata(variant, icon.parent));
		}
	}

	return icons;
}

/**
 * Gets the icons from the Figma node.
 * @param node Node being searched.
 * @returns The icon, and its variants.
 */
function findIcons(node: Figma.Node): IconNode[] {
	const results: IconNode[] = [];

	if (node.type === "COMPONENT_SET" && node.name.startsWith("Icon")) {
		results.push({
			parent: node,
			variants: node.children.filter((child): child is Figma.ComponentNode => child.type === "COMPONENT"),
		});
	}

	if ("children" in node && node.children) {
		for (const child of node.children) {
			results.push(...findIcons(child));
		}
	}

	return results;
}

/**
 * Parses the icon metadata from a variant node.
 * @param variant Icon variant node.
 * @param parent Parent node of the icon.
 * @returns The metadata for the icon variant.
 */
function parseMetadata(variant: Figma.ComponentNode, parent: Figma.ComponentSetNode): IconMetadata {
	const metadata = variant.name.split(", ").reduce(
		(data: IconMetadata, prop: string) => {
			const [key, value] = prop.split("=").map((s) => s.trim());
			if (key && value) {
				data[key.toLowerCase()] = value;
			}

			return data;
		},
		{
			color: false,
			name: "",
			size: "m",
			style: "outlined",
		},
	);

	metadata.size = metadata.size.toLowerCase() as IconMetadata["size"];
	metadata.style = metadata.style.toLowerCase() as IconMetadata["style"];

	if (metadata.size !== "s" && metadata.size !== "m" && metadata.size !== "l") {
		throw new Error(`Unknown size "${metadata.size}"`);
	}

	if (metadata.style !== "filled" && metadata.style !== "outlined") {
		throw new Error(`Unknown style "${metadata.style}"`);
	}

	metadata.name = getName(metadata, parent);
	return metadata;
}

/**
 * Gets the filename for an icon variant.
 * @param metadata Icon metadata.
 * @param parent Parent node.
 * @returns The name.
 */
function getName(metadata: IconMetadata, parent: Figma.ComponentSetNode): string {
	let name = parent.name
		.split(",")
		.at(0)!
		.replace(/^Icon\s*/, "") // remove "Icon" prefix
		.replace(/(\d+)([A-Z][a-z]*)/g, "$1-$2") // handle numbers, e.g. 10Square -> 10-Square
		.replace(/([a-z])([A-Z])/g, "$1-$2") // split words, e.g. ZoomIn -> Zoom-In
		.toLowerCase();

	if (metadata.style === "filled") {
		name += "--filled";
	}

	if (metadata.color) {
		name += "--color";
	}

	return name;
}

/**
 * An icon node within Figma.
 */
type IconNode = {
	/**
	 * Parent node.
	 */
	parent: Figma.ComponentSetNode;

	/**
	 * Variants of the icon.
	 */
	variants: Figma.ComponentNode[];
};

/**
 * Metadata associated with the icon.
 */
export type IconMetadata = {
	/**
	 * Determines whether the color should be preserved.
	 */
	color: boolean;

	/**
	 * Name of the icon.
	 */
	name: string;

	/**
	 * Size of the icon.
	 */
	size: Size;

	/**
	 * Style of the icon.
	 */
	style: "outlined" | "filled";
};
