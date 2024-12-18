import { readdir, readFile, rm, mkdir } from "node:fs/promises";
import { basename, extname, join, parse } from "node:path";
import ora from "ora";

import type { Size } from "../src/metadata/index.js";
import { getSvgStringMetadata } from "../src/metadata/providers.js";
import { type SvgIcon, TransformerContext } from "./transformer.js";
import { MetadataTransformer } from "./transformers/metadata.js";
import { ReactTransformer } from "./transformers/react.js";
import { StringsTransformer } from "./transformers/strings.js";

async function cleanup() {
	const status = ora("Cleaning up old generated files...").start();
	try {
		// Clean up React components
		await rm(join(import.meta.dirname, "../src/react/icons"), { recursive: true, force: true });
		// Clean up string exports
		await rm(join(import.meta.dirname, "../src/strings"), { recursive: true, force: true });
		// Clean up metadata
		await rm(join(import.meta.dirname, "../src/metadata/generated"), { recursive: true, force: true });
		status.succeed("Cleaned up old generated files");
	} catch (error) {
		status.fail(`Failed to clean up: ${error.message}`);
		throw error;
	}
}

// Clean up before starting
await cleanup();

const status = ora("Reading icons…").start();
const sizes: ReadonlyMap<string, Size> = new Map([
	["16", "s"],
	["20", "m"],
	["24", "l"],
]);

// Create and initialize the transformer context
const ctx = new TransformerContext();
await ctx.initialize();

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
	const { exportName } = getSvgStringMetadata(name); // This ensures a unique name for all icons.
	let icon = icons.get(exportName);
	if (icon && icon.name !== name) {
		throw new Error(`Duplicate icons found:\n\n${name}\n${icon.name}\n\nBoth resolve to: ${exportName}`);
	}

	icon = icon || {
		name,
		exportName,
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

	// Save the icon to the map and context
	icons.set(exportName, icon);
	ctx.addIcon(icon);
	status.suffixText = `${i} / ${entries.length}`;
}

status.suffixText = "";
status.succeed("Reading icons");

/**
 * Transform all of the icons against each transformer.
 */
const transformers = [
	new MetadataTransformer(),
	new ReactTransformer(),
	new StringsTransformer(),
];

for (const transformer of transformers) {
	const status = ora(transformer.name).start();

	status.suffixText = "Initializing...";
	await transformer.initialize?.(ctx);

	let i = 0;
	for (const [, icon] of icons) {
		await transformer.transform(ctx, icon);
		status.suffixText = `${i++} / ${icons.size}`;
	}

	status.suffixText = "Finalizing...";
	await transformer.finalize?.(ctx);
	status.suffixText = "";

	status.succeed(transformer.name);
}
