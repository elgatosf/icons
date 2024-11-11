import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, parse } from "node:path";

import { getExportName } from "../src/js/utils.ts";

/**
 * Gets the path of the specified {@link path} from the root of this project.
 * @param path Path relative to the root.
 * @returns Absolute path of the specified {@link path} relative to the root.
 */
function fromRoot(path: string) {
	return join(import.meta.dirname, "..", path);
}

/**
 * Writes the data to the specified path, relative to the `src/icons/` directory.
 * @param path Output path.
 * @param data Data to write to the file.
 */
function write(path: string, data: string): void {
	const file = fromRoot(path);

	// Create the parent directory if it does not exist.
	const parent = dirname(file);
	if (!existsSync(parent)) {
		mkdirSync(parent, { recursive: true });
	}

	console.log(`\x1b[90mWriting\x1b[39m ${path}`);
	writeFileSync(file, data, { encoding: "utf8" });
}

/**
 * Transforms all SVG files in the specified directory to importable variables, as TypeScript files.
 * @param dir Source directory of the SVG files.
 * @param outDir Output directory where the TypeScript files will be written.
 */
function transform(dir: string, outDir: string): void {
	dir = fromRoot(dir);

	// Write each SVG as a JavaScript module.
	const icons = readdirSync(dir).map((filename) => {
		const name = parse(filename).name;

		const svg = readFileSync(join(dir, filename), { encoding: "utf8" }).replace(/\r?\n\s*/g, "");
		write(join(outDir, `icons/${name}.ts`), `const icon: string = '${svg}'\nexport default icon`);

		return {
			name,
			exportName: getExportName(name),
			path: `./icons/${name}.js`,
		};
	});

	// Write the union type of icon names.
	const iconType = icons
		.sort((a, b) => a.name.localeCompare(b.name))
		.map((icon) => `"${icon.name}"`)
		.join(" | ");

	write(join(outDir, "icon.ts"), `export type Icon = ${iconType};`);

	// Write the index file.
	const indexTs = icons
		.sort((a, b) => a.exportName.localeCompare(b.exportName))
		.reduce((contents, { exportName: name, path }) => {
			return (contents += `export { default as ${name} } from "${path}";\n`);
		}, `export type { Icon } from "./icon.js";\n\n`);

	write(join(outDir, "index.ts"), indexTs);
}

// Transform each of the icon sizes.
transform("svg/16", "src/js/icons/small");
transform("svg/24", "src/js/icons/medium");
transform("svg/32", "src/js/icons/large");

console.log("\x1b[32mSVG to JS conversion complete\x1b[39m");
