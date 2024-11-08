/**
 * Converts the name of an icon to it's equivalent export name.
 *
 * For example:
 * | File name          | Export name         |
 * |:-------------------|:--------------------|
 * | `0-circle--filled` | `icon0CircleFilled` |
 * | `hdr`              | `iconHdr`           |
 * | `volume-1`         | `iconVolume1`       |
 * @param name Name of the icon.
 * @returns Export name prefixed with `svg`.
 */
export function toExportName(name: string): string {
	return `icon${name.split("-").reduce((prev, curr) => {
		return prev + curr.charAt(0).toUpperCase() + curr.substring(1);
	}, "")}`;
}
