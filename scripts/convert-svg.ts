import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, parse } from "node:path";
import { toExportName } from "../src/converters.ts";

// Prepare the output directory.
const dir = join(import.meta.dirname, "../src/icons/");
if (existsSync(dir)) {
	rmSync(dir, { recursive: true });
}

/**
 * Writes the data to the specified path, relative to the `src/icons/` directory.
 * @param path Output path.
 * @param data Data to write to the file.
 */
function write(path: string, data: string): void {
	const file = join(dir, path);

	// Create the parent directory if it does not exist.
	const parent = dirname(file);
	if (!existsSync(parent)) {
		mkdirSync(parent, { recursive: true });
	}

	console.log(`\x1b[90mWriting\x1b[39m ${path}`);
	writeFileSync(file, data, { encoding: "utf8" });
}

// Read the SVG source files.
const svgRoot = join(import.meta.dirname, "../svg");
const icons = readdirSync(svgRoot).map((filename) => {
	return {
		name: parse(filename).name,
		contents: readFileSync(join(svgRoot, filename), { encoding: "utf8" }),
	};
});

// Write each of the SVG as TypeScript files.
icons.forEach(({ name, contents }) => {
	const safeContents = contents.replace(/\r?\n\s*/g, "");
	write(`svg/${name}.ts`, `const svg: string = '${safeContents}'\nexport default svg`);
});

// Write the index file that exports all SVG icons as TypeScript variables.
write(
	"index.ts",
	icons
		.map(({ name }) => {
			return `export { default as ${toExportName(name)} } from "./svg/${name}.js"`;
		})
		.join("\n")
);

// Write the union type of icon names.
write("icon.ts", `export type Icon = ${icons.map(({ name }) => `"${name}"`).join(" | ")};`);

console.log("\x1b[32mSVG conversion complete\x1b[39m");
