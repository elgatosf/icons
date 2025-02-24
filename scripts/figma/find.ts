import type * as Figma from "@figma/rest-api-spec";

import type { IconMetadata } from "../metadata/icon.ts";
import { parseMetadata } from "./node-to-metadata.ts";

/**
 * Finds all icons within the specified document.
 * @param document Document to search.
 * @returns The icons, indexed by their node identifier.
 */
export function findIcons(document: Figma.DocumentNode): Map<string, IconMetadata> {
	const icons = new Map<string, IconMetadata>();
	visit(document, icons);

	return icons;
}

/**
 * Visit the node, and its children, and adds all icons to the map.
 * @param node Node being searched.
 * @param icons Map of icons.
 */
function visit(node: Figma.Node, icons: Map<string, IconMetadata>): void {
	if (node.type === "COMPONENT_SET" && node.name.startsWith("Icon")) {
		node.children
			.filter((child): child is Figma.ComponentNode => child.type === "COMPONENT")
			.forEach((icon) => {
				icons.set(icon.id, parseMetadata(icon, node));
			});
	}

	if ("children" in node && node.children) {
		for (const child of node.children) {
			visit(child, icons);
		}
	}
}
