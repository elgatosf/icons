/**
 * Gets the importable name of the icon, as an SVG string variable, from its original name.
 *
 * For example, the icon named `volume-1` is importable with `iconVolume1`, like so:
 * ```ts
 * import { iconVolume1 } from "@elgato/icons/m";
 * //       └────┬────┘
 * // Result for icon "volume-1".
 * ```
 * @param name Name of the icon.
 * @returns Name the icon is exported as.
 */
export function getSvgStringName(name: string): string {
	return `icon${name.split("-").reduce((prev, curr) => {
		return prev + curr.charAt(0).toUpperCase() + curr.substring(1);
	}, "")}`;
}

/**
 * Gets the importable name of the icon, as a React component, from its original name.
 *
 * For example, the icon named `volume-1` is importable with `IconVolume1`, like so:
 * ```ts
 * import { IconVolume1 } from "@elgato/icons/react";
 * //       └────┬────┘
 * // Result for icon "volume-1".
 * ```
 * @param name Name of the icon.
 * @returns Name the icon is exported as.
 */
export function getReactComponentName(name: string): string {
	const importName = getSvgStringName(name);
	return `${importName.charAt(0).toUpperCase()}${importName.slice(1)}`;
}
