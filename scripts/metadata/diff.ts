import chalk from "chalk";
import { Table } from "console-table-printer";

import type { IconMetadataCollection } from "./collection.ts";
import { metadata } from "./metadata.ts";

/**
 * Compares the specified metadata collection to the current metadata on disk.
 * @param icons Collection of icon metadata.
 */
export function compare(icons: IconMetadataCollection): void {
	const old = metadata.icons as unknown as IconMetadataCollection;
	const changes: Change[] = [];

	// Iterate over the metadata for the icons, comparing it against the previously generated.
	for (const filename of Object.keys(icons)) {
		const { name, sizes } = icons[filename];
		let change: Change = { filename, name, sizes: sizes.toString() };

		// Check: Added icon.
		if (!(filename in old)) {
			changes.push({
				...change,
				type: "added",
			});
			continue;
		}

		// Check: Modified name.
		const prev = old[filename];
		console.log(prev.name);
		if (prev.name !== name) {
			change.type = "modified";
			change.name = `${chalk.red(name)} ${chalk.grey(prev.name)}`;
		}

		// Check: Modified sizes.
		// TODO.

		if (change.type) {
			changes.push(change);
		}
	}

	// Iterate over the previously generated to determine if icons were removed.
	for (const filename of Object.keys(old)) {
		if (!(filename in icons)) {
			changes.push({
				type: "removed",
				filename: chalk.red(filename),
				name: old[filename].name,
				sizes: old[filename].sizes.toString(),
			});
		}
	}

	print(changes);
}

/**
 * Prints the changes as a table.
 * @param changes The changes.
 */
function print(changes: Change[]): void {
	const tbl = new Table({
		columns: [
			{ title: "Filename", name: "filename", alignment: "left" },
			{ title: "Name", name: "name", alignment: "left" },
			{ title: "Sizes", name: "sizes", alignment: "left" },
		],
	});

	// Sort the changes by the icon's filename, and then add the rows.
	changes
		.sort((a, b) => a.filename.localeCompare(b.filename))
		.forEach(({ type, filename, name, sizes }) => {
			tbl.addRow({
				filename: type === "added" ? chalk.green(filename) : type === "removed" ? chalk.yellow(filename) : filename,
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
	type?: "added" | "removed" | "modified";
};
