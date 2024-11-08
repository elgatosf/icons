import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, parse } from "node:path";

import { toExportName } from "../src/converters.ts";

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
 * @returns Names of the SVGs that were transformed.
 */
function transform(dir: string, outDir: string): string[] {
	dir = fromRoot(dir);
	return readdirSync(dir).map((filename) => {
		const name = parse(filename).name;

		// Write the SVG contents as TypeScript.
		const svg = readFileSync(join(dir, filename), { encoding: "utf8" }).replace(/\r?\n\s*/g, "");
		write(join(outDir, `${name}.ts`), `const icon: string = '${svg}'\nexport default icon`);

		return name;
	});
}

// Transform each of the icon sizes.
transform("svg/16", "src/svg/small");
const icons = transform("svg/24", "src/svg/medium");
transform("svg/32", "src/svg/large");

// Write the index file that exports all SVG icons as TypeScript variables.
write(
	"src/svg/index.ts",
	icons
		.map((name) => {
			return `export { default as ${toExportName(name)} } from "./medium/${name}.js"`;
		})
		.join("\n"),
);

// Write the union type of icon names.
write("src/svg/icon.ts", `export type Icon = ${icons.map((name) => `"${name}"`).join(" | ")};`);

console.log("\x1b[32mSVG conversion complete\x1b[39m");
