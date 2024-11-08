import { toExportName } from "./converters.js";
import type { Icon } from "./svg/icon.js";
import * as icons from "./svg/index.js";

/**
 * Gets the icon, in SVG format, from the specified name.
 * @param name Name of the icon.
 * @returns Icon as an SVG string.
 */
export function icon(name: Icon): string {
	const exportName = toExportName(name);
	if (exportName in icons) {
		return icons[exportName as keyof typeof icons];
	}

	return icons.iconHelp;
}

export { Icon };
