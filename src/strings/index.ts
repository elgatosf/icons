import { getExportName } from "../utils.js";
import * as icons from "./m/index.js";

export * from "./m/index.js";

/**
 * Gets the icon, in SVG format, from the specified name.
 * @param name Name of the icon.
 * @returns Icon as an SVG string.
 */
export function icon(name: icons.Icon): string {
	const exportName = getExportName(name);
	if (exportName in icons) {
		return icons[exportName as keyof typeof icons];
	}

	return icons.iconHelp;
}
