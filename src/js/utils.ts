/**
 * Gets the export-as name of the icon from its original name.
 *
 * For example, the icon named `volume-1` is exported as `iconVolume1`, like so:
 * ```ts
 * //                                                name
 * //                                              ┌──┴───┐
 * export { default as iconVolume1 } from "./icons/volume-1.js";
 * //                  └────┬────┘
 * //                    returns
 * ```
 * @param name Name of the icon.
 * @returns Name the icon is exported as.
 */
export function getExportName(name: string): string {
	return `icon${name.split("-").reduce((prev, curr) => {
		return prev + curr.charAt(0).toUpperCase() + curr.substring(1);
	}, "")}`;
}
