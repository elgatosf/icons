/**
 * Converts the name of an icon to it's equivalent export name.
 *
 * For example:
 * | File name          | Export name        |
 * |:-------------------|:-------------------|
 * | `0-circle--filled` | `svg0CircleFilled` |
 * | `hdr`              | `svgHdr`           |
 * | `volume-1`         | `svgVolume1`       |
 * @param name Name of the icon.
 * @returns Export name prefixed with `svg`.
 */
export function toExportName(name: string): string {
	return `svg${name.split("-").reduce((prev, curr) => {
		return prev + curr.charAt(0).toUpperCase() + curr.substring(1);
	}, "")}`;
}
