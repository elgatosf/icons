import { readdir, readFile } from "node:fs/promises";
import { basename, extname, join, parse } from "node:path";
import ora from "ora";

import { getSvgStringMetadata, type icons as iconsMetadata, type Size } from "./metadata.ts";
import type { SvgIcon, Transformer } from "./transformer.ts";
import { ReactTransformer } from "./transformers/react.ts";
import { StringsTransformer } from "./transformers/strings.ts";

const status = ora("Reading icons…").start();
const sizes: ReadonlyMap<string, Size> = new Map([
	["16", "s"],
	["24", "m"],
	["32", "l"],
]);

/**
 * Get all icon SVG files.
 */
const entries = (
	await readdir(join(import.meta.dirname, "../svg"), {
		encoding: "utf8",
		recursive: true,
		withFileTypes: true,
	})
).filter((dirent) => {
	return dirent.isFile() && extname(dirent.name) === ".svg";
});

/**
 * Iterate over the SVG files, and build a map of icons and their sizes.
 */
const icons = new Map<string, SvgIcon>();
for (let i = 0; i < entries.length; i++) {
	const entry = entries[i];

	// Read / create the icon.
	const name = parse(entry.name).name;
	const { exportName } = getSvgStringMetadata(name as keyof typeof iconsMetadata);

	let icon = icons.get(exportName);
	if (icon && icon.name !== name) {
		throw new Error(`Duplicate icons found:\n\n${name}\n${icon.name}\n\nBoth resolve to: ${exportName}`);
	}

	icon = icon || {
		name,
		sizes: new Map(),
	};

	// Determine the size of the icon.
	const size = sizes.get(basename(entry.parentPath));
	if (!size) {
		throw new Error(`Unable to determine size from directory name: ${basename(entry.parentPath)}`);
	}

	if (icon.sizes.has(size)) {
		throw new Error(`Duplicate size "${size}" found for icon: ${entry.name}`);
	}

	// Add the icon size.
	icon.sizes.set(size, {
		svg: await readFile(join(entry.parentPath, entry.name), {
			encoding: "utf8",
		}),
	});

	// Save the icon to the map.
	icons.set(exportName, icon);
	status.suffixText = `${i} / ${entries.length}`;
}

status.suffixText = "";
status.succeed("Reading icons");

/**
 * Transform all of the icons against each transformer.
 */

const transformers: Transformer[] = [
	new ReactTransformer(),
	new StringsTransformer(),
];

for (const transformer of transformers) {
	const status = ora(transformer.name).start();

	status.suffixText = "Initializing...";
	await transformer.initialize?.();

	let i = 0;
	for (const [, icon] of icons) {
		await transformer.transform(icon);
		status.suffixText = `${i++} / ${icons.size}`;
	}

	status.suffixText = "Finalizing...";
	await transformer.finalize?.();
	status.suffixText = "";

	status.succeed(transformer.name);
}
