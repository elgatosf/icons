import type { IconMetadata } from "./icon.ts";
import type { metadata } from "./metadata.ts";

/**
 * Aggregates the icons metadata to be indexed by the icon's file name (without the extension).
 * @param icons Icons to aggregate.
 * @returns The aggregated collection of metadata
 */
export function createMetadataCollection(icons: Iterable<IconMetadata>): IconMetadataCollection {
	const db: IconMetadataCollection = {};

	for (const icon of Array.from(icons).sort((a, b) => a.name.lowerCase.localeCompare(b.name.lowerCase))) {
		if (icon.name.lowerCase in db) {
			// Icon exists, add the size in order, and ensure sizes are distinct.
			db[icon.name.lowerCase].sizes = [...new Set([icon.size, ...db[icon.name.lowerCase].sizes].sort(compareSize))];
		} else {
			// Add the icon to the aggregate collection.
			db[icon.name.lowerCase] = {
				name: icon.name.original,
				sizes: [icon.size],
			};
		}
	}

	return db;
}

/**
 * Gets the available sizes of an icon, as an ordered array, for example `["s", "m", "l"]`.
 * @param icon Icon.
 * @returns Array of sizes.
 */
function compareSize(a: metadata.Size, b: metadata.Size): number {
	const weights: metadata.Size[] = ["s", "m", "l"];
	return weights.indexOf(a) - weights.indexOf(b);
}

/**
 * An aggregation of icon metadata, indexed by the icons file name (without the extension).
 */
export type IconMetadataCollection = {
	[filename: string]: {
		/**
		 * Original name of the icon.
		 */
		name: string;

		/**
		 * Sizes the icon is available in.
		 */
		sizes: metadata.Size[];
	};
};
