import type { MediumIcon } from "../catalogue/index.js";
import { getExportName } from "../catalogue/naming.js";
import * as icons from "./m/index.js";

export * from "./m/index.js";

export { MediumIcon };

/**
 * Gets the icon, in SVG format, from the specified name.
 * @param name Name of the icon.
 * @returns Icon as an SVG string.
 */
export function icon(name: MediumIcon): string {
	const exportName = getExportName(name);
	if (exportName in icons) {
		return icons[exportName as keyof typeof icons];
	}

	return icons.iconHelp;
}
