import chalk from "chalk";
import { Table } from "console-table-printer";

import { compareSize, type IconMetadataCollection } from "./collection.ts";
import { metadata } from "./metadata.ts";

/**
 * Compares the specified metadata collection to the current metadata on disk.
 * @param icons Collection of icon metadata.
 * @returns The number of breaking changes.
 */
export function printComparison(icons: IconMetadataCollection): ComparisonResult {
	const changes: Change[] = [];
	const counts = {
		addedSize: 0,
		modifiedName: 0,
		removedSize: 0,
	};

	const oldIcons = metadata.icons as unknown as IconMetadataCollection;
	const diff = compareSets(Object.keys(oldIcons), Object.keys(icons));

	// Removed icons.
	diff.aExclusive.forEach((filename) => {
		changes.push({
			key: filename,
			filename: chalk.red(filename),
			name: oldIcons[filename].name,
			sizes: oldIcons[filename].sizes.toString(),
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
		const sizeDiff = compareSets(oldIcons[filename].sizes, icons[filename].sizes);
		if (sizeDiff.aExclusive.length !== 0 || sizeDiff.bExclusive.length !== 0) {
			// Increment the counters.
			counts.addedSize += sizeDiff.bExclusive.length;
			counts.removedSize += sizeDiff.aExclusive.length;

			// Add the "Sizes" change.
			change.type = sizeDiff.aExclusive.length > 0 ? "breaking" : "enhancement";
			change.sizes = [...sizeDiff.aExclusive, ...sizeDiff.bExclusive, ...sizeDiff.intersection]
				.sort(compareSize)
				.map((size) => {
					if (sizeDiff.aExclusive.includes(size)) {
						return chalk.red(size);
					} else if (sizeDiff.bExclusive.includes(size)) {
						return chalk.green(size);
					} else {
						return size;
					}
				})
				.toString();
		}

		// Compare icon name.
		if (oldIcons[filename].name !== icons[filename].name) {
			counts.modifiedName++;

			change.name = `${chalk.red(icons[filename].name)} ${chalk.grey(oldIcons[filename].name)}`;
			change.type = "breaking";
		}

		if (change.type) {
			changes.push(change);
		}
	});

	// No changes.
	if (changes.length === 0) {
		return { isBreaking: false };
	}

	// Print the table of changes, and the summary.
	table(changes);
	console.log();

	summarize(chalk.green, [diff.bExclusive.length, "icon(s) added"], [counts.addedSize, "icon size(s) added"]);
	const breaking = summarize(
		chalk.red,
		[diff.aExclusive.length, "icon(s) removed"],
		[counts.removedSize, "icon size(s) removed"],
		[counts.modifiedName, "icon name(s) changed"],
	);

	console.log();
	return { isBreaking: breaking > 0 };
}

/**
 * Result of a comparison.
 */
type ComparisonResult = {
	/**
	 * Determines whether the comparison found breaking changes.
	 */
	isBreaking: boolean;
};

/**
 * Summarizes a collection of messages when their count is greater than zero.
 * @param format Formatter used when logging the summary.
 * @param change The changes.
 * @returns The total number of changes.
 */
function summarize(format: (...text: unknown[]) => string, ...change: [count: number, suffix: string][]): number {
	let total = 0;
	const text = change
		.map(([count, suffix]) => {
			total += count;
			return count > 0 ? `${count} ${suffix}` : undefined;
		})
		.filter((c) => c !== undefined)
		.join(", ");

	if (text) {
		console.log(format(text));
	}

	return total;
}

/**
 * Prints the changes as a table.
 * @param changes The changes.
 */
function table(changes: Change[]): void {
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
	 * Entries exclusive to set B.
	 */
	bExclusive: T[];

	/**
	 * Entries found in both sets.
	 */
	intersection: T[];
};
