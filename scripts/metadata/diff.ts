import chalk from "chalk";
import { Table } from "console-table-printer";

import { compareSize, type IconMetadataCollection } from "./collection.ts";
import { metadata } from "./metadata.ts";

/**
 * Compares the specified metadata collection to the current metadata on disk.
 * @param icons Collection of icon metadata.
 */
export function compare(icons: IconMetadataCollection): void {
	const old = metadata.icons as unknown as IconMetadataCollection;

	const changes: Change[] = [];
	const diff = compareSets(Object.keys(old), Object.keys(icons));

	// Removed icons.
	diff.aExclusive.forEach((filename) => {
		changes.push({
			key: filename,
			filename: chalk.red(filename),
			name: old[filename].name,
			sizes: old[filename].sizes.toString(),
			type: "breaking",
		});
	});

	// Added icons.
	diff.bExclusive.forEach((filename) => {
		changes.push({
			key: filename,
			filename: chalk.green(filename),
			name: icons[filename].name,
			sizes: icons[filename].sizes.toString(),
			type: "enhancement",
		});
	});

	// Maybe modified.
	diff.intersection.forEach((filename) => {
		let change: Change = {
			key: filename,
			filename,
			name: icons[filename].name,
			sizes: icons[filename].sizes.toString(),
		};

		// Compare icon sizes.
		const sizeComparison = compareSets(old[filename].sizes, icons[filename].sizes);
		if (sizeComparison.aExclusive.length !== 0 || sizeComparison.bExclusive.length !== 0) {
			change.type = sizeComparison.aExclusive.length > 0 ? "breaking" : "enhancement";

			change.sizes = [...sizeComparison.aExclusive, ...sizeComparison.bExclusive, ...sizeComparison.intersection]
				.sort(compareSize)
				.map((size) => {
					if (sizeComparison.aExclusive.includes(size)) {
						return chalk.red(size);
					} else if (sizeComparison.bExclusive.includes(size)) {
						return chalk.green(size);
					} else {
						return size;
					}
				})
				.toString();
		}

		// Compare icon name.
		if (old[filename].name !== icons[filename].name) {
			change.name = `${chalk.red(icons[filename].name)} ${chalk.grey(old[filename].name)}`;
			change.type = "breaking";
		}

		if (change.type) {
			changes.push(change);
		}
	});

	print(changes);
}

/**
 * Prints the changes as a table.
 * @param changes The changes.
 */
function print(changes: Change[]): void {
	const tbl = new Table({
		columns: [
			{ title: " ", name: "type" },
			{ title: "Filename", name: "filename", alignment: "left" },
			{ title: "Name", name: "name", alignment: "left" },
			{ title: "Sizes", name: "sizes", alignment: "left" },
		],
	});

	// Sort the changes by the icon's filename, and then add the rows.
	changes
		.sort((a, b) => a.key.localeCompare(b.key))
		.forEach(({ type, filename, name, sizes }) => {
			tbl.addRow({
				type: type === "enhancement" ? chalk.green("+") : chalk.red("!"),
				filename,
				name,
				sizes,
			});
		});

	// Print the table on a new line.
	console.log();
	tbl.printTable();
}

/**
 * Information about a change to an icon.
 */
type Change = {
	/**
	 * Key of the change.
	 */
	key: string;

	/**
	 * Filename of the icon.
	 */
	filename: string;

	/**
	 * Name of the icon.
	 */
	name: string;

	/**
	 * Sizes the icon supports.
	 */
	sizes: string;

	/**
	 * Type of the change.
	 */
	type?: "enhancement" | "breaking";
};

/**
 * Compares two sets, and returns the result of the comparison.
 * @param a Set A.
 * @param b Set B.
 * @returns The result of the comparison.
 */
function compareSets<T>(a: T[], b: T[]): SetComparisonResult<T> {
	const aSet = new Set(a);
	const bSet = new Set(b);

	return {
		aExclusive: [...aSet].filter((item) => !bSet.has(item)),
		bExclusive: [...bSet].filter((item) => !aSet.has(item)),
		intersection: [...aSet].filter((item) => bSet.has(item)),
	};
}

/**
 * Results of comparing two sets.
 */
type SetComparisonResult<T> = {
	/**
	 * Entries exclusive to set A.
	 */
	aExclusive: T[];

	/**
	 * Entries exclusive to set A.
	 */
	bExclusive: T[];

	/**
	 * Entries found in both sets.
	 */
	intersection: T[];
};
