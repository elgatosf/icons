import chalk from "chalk";
import { Table } from "console-table-printer";
import { basename, parse } from "node:path";
import { $ } from "zx";

import { compareSize, type IconMetadataCollection } from "./collection.ts";
import { metadata } from "./metadata.ts";

/**
 * Provides a comparison of two sets of icons from their metadata.
 */
class MetadataComparison {
	/**
	 * Collection of changes.
	 */
	#changes: Change[] = [];

	/**
	 * Collection of counts that summarize the changes.
	 */
	#counts = {
		addedSize: 0,
		modifiedName: 0,
		modifiedSize: 0,
		removedSize: 0,
	};

	/**
	 * A diff of the filenames; set A represents the old icons, and set B represents the new icons.
	 */
	#diff: SetComparisonResult<string>;

	/**
	 * Metadata used to generate this diff.
	 */
	#metadata: IconMetadataCollection;

	/**
	 * Initializes a new instance of the {@link MetadataComparison} class.
	 * @param newIcons
	 */
	constructor(newIcons: IconMetadataCollection) {
		this.#metadata = newIcons;

		const oldIcons = metadata.icons as unknown as IconMetadataCollection;
		this.#diff = compareSets(Object.keys(oldIcons), Object.keys(newIcons));

		// Removed icons.
		this.#diff.aExclusive.forEach((filename) => {
			this.#changes.push({
				key: filename,
				filename: chalk.red(filename),
				name: oldIcons[filename].name,
				sizes: unchanged(oldIcons[filename].sizes),
				type: "removed",
			});
		});

		// Added icons.
		this.#diff.bExclusive.forEach((filename) => {
			this.#changes.push({
				key: filename,
				filename: chalk.green(filename),
				name: newIcons[filename].name,
				sizes: unchanged(newIcons[filename].sizes),
				type: "added",
			});
		});

		// Maybe modified.
		this.#diff.intersection.forEach((filename) => {
			let change: Change = {
				key: filename,
				filename,
				name: newIcons[filename].name,
				sizes: unchanged(newIcons[filename].sizes),
			};

			// Compare icon sizes.
			const sizeDiff = compareSets(oldIcons[filename].sizes, newIcons[filename].sizes);
			if (sizeDiff.aExclusive.length !== 0 || sizeDiff.bExclusive.length !== 0) {
				// Increment the counters.
				this.#counts.addedSize += sizeDiff.bExclusive.length;
				this.#counts.removedSize += sizeDiff.aExclusive.length;

				// Add the "Sizes" change.
				change.type = sizeDiff.aExclusive.length > 0 ? "removed" : "added";
				change.sizes = [...sizeDiff.aExclusive, ...sizeDiff.bExclusive, ...sizeDiff.intersection]
					.sort(compareSize)
					.map((size) => {
						return {
							size,
							type: sizeDiff.aExclusive.includes(size)
								? "removed"
								: sizeDiff.bExclusive.includes(size)
									? "added"
									: undefined,
						};
					});
			}

			// Compare icon name.
			if (oldIcons[filename].name !== newIcons[filename].name) {
				this.#counts.modifiedName++;

				change.name = `${chalk.red(newIcons[filename].name)} ${chalk.grey(oldIcons[filename].name)}`;
				change.type = "removed";
			}

			if (change.type) {
				this.#changes.push(change);
			}
		});
	}

	/**
	 * Gets a value indicating whether the new icons include breaking changes.
	 * @returns `true` when an icon was removed or renamed, or an icon size was removed; otherwise `false`.
	 */
	get isBreaking(): boolean {
		return this.#diff.aExclusive.length > 0 || this.#counts.modifiedName > 0 || this.#counts.removedSize > 0;
	}

	/**
	 * Executes a `git diff` on the raw SVG files, and adds the modified files as changes.
	 */
	public async compareFiles(): Promise<void> {
		// Iterate over the paths from `git diff`ing.
		const gifDiff = await $`git diff --name-only --diff-filter=M HEAD -- svg`;
		for (const file of gifDiff.stdout.split("\n")) {
			if (file.trim() === "") {
				continue;
			}

			const { name: filename, dir } = parse(file.trim());
			const size = basename(dir) as metadata.Size;

			// Get the existing changes to the icon, or add a new one.
			let iconChange = this.#changes.find(({ key }) => key === filename);
			if (!iconChange) {
				iconChange = {
					filename,
					key: filename,
					name: this.#metadata[filename].name,
					sizes: unchanged(this.#metadata[filename].sizes),
				};

				this.#changes.push(iconChange);
			}

			// Indicate the size has been modified.
			const sizeChange = iconChange.sizes.find((change) => change.size === size);
			if (sizeChange) {
				sizeChange.type = "modified";
			} else {
				throw new Error(`An unknown icon size was changed: ${filename} (${size})`);
			}

			this.#counts.modifiedSize++;
		}
	}

	/**
	 * Prints the comparison to the console.
	 */
	public print(): void {
		if (this.#changes.length === 0) {
			return;
		}

		this.#printTableOfChanges();
		console.log();
		this.#summarize(
			chalk.green,
			[this.#diff.bExclusive.length, "icon(s) added"],
			[this.#counts.addedSize, "icon size(s) added"],
		);
		this.#summarize(chalk.yellow, [this.#counts.modifiedSize, "icon size(s) modified"]);
		this.#summarize(
			chalk.red,
			[this.#diff.aExclusive.length, "icon(s) removed"],
			[this.#counts.removedSize, "icon size(s) removed"],
			[this.#counts.modifiedName, "icon name(s) changed"],
		);
	}

	/**
	 * Prints the table of changes to the console.
	 */
	#printTableOfChanges() {
		const tbl = new Table({
			columns: [
				{ title: " ", name: "type" },
				{ title: "Filename", name: "filename", alignment: "left" },
				{ title: "Name", name: "name", alignment: "left" },
				{ title: "Sizes", name: "sizes", alignment: "left" },
			],
		});

		// Sort the changes by the icon's filename, and then add the rows.
		this.#changes
			.sort((a, b) => a.key.localeCompare(b.key))
			.forEach(({ type, filename, name, sizes }) => {
				tbl.addRow({
					type: type === "added" ? chalk.green("+") : type === "removed" ? chalk.red("-") : chalk.yellow("±"),
					filename,
					name,
					sizes: colorize(sizes),
				});
			});

		// Print the table on a new line.
		console.log();
		tbl.printTable();
	}

	/**
	 * Summarizes a collection of messages when their count is greater than zero.
	 * @param format Formatter used when logging the summary.
	 * @param change The changes.
	 * @returns The total number of changes.
	 */
	#summarize(format: (...text: unknown[]) => string, ...change: [count: number, suffix: string][]): number {
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
}

/**
 * Compares the current icons, to the new specified icons.
 * @param icons New icons to compare against.
 * @returns The comparison result.
 */
export function compare(icons: IconMetadataCollection): MetadataComparison {
	return new MetadataComparison(icons);
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
	sizes: SizeChange[];

	/**
	 * Type of the change.
	 */
	type?: "added" | "removed" | "modified";
};

/**
 * Represents a change to an icon size.
 */
type SizeChange = {
	/**
	 * The icon size.
	 */
	size: metadata.Size;

	/**
	 * Type of change to the icon size.
	 */
	type?: "added" | "removed" | "modified";
};

/**
 * Converts a collection of sizes, to an array of unchanged {@link SizeChange}.
 * @param sizes Sizes.
 * @returns Collection of {@link SizeChange}.
 */
function unchanged(sizes: metadata.Size[]): SizeChange[] {
	return sizes.map((size) => {
		return {
			size,
			type: undefined,
		};
	});
}

/**
 * Colorizes the icon size changes.
 * @param sizes The changes.
 * @returns Colorized string of changes.
 */
function colorize(sizes: SizeChange[]): string {
	return sizes
		.map(({ size, type }) => {
			switch (type) {
				case "added":
					return chalk.green(size);
				case "removed":
					return chalk.red(size);
				case "modified":
					return chalk.yellow(size);
				default:
					return size;
			}
		})
		.join(",");
}

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
