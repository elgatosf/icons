import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import { dirname, join, parse } from "node:path";

/**
 * Resolves the path name, relative to the project root.
 * @param path Path, relative to the project root.
 * @returns The resolved path.
 */
export function resolve(...path: string[]): string {
	return join(import.meta.dirname, "..", ...path);
}

/**
 * Writes the specified data to the path, relative to the project root.
 * @param path Path, relative to the project root, where the file should be written.
 * @param data Data to write to the file.
 */
export async function writeFile(path: string, data: string): Promise<void> {
	// Create the parent directory if it does not exist.
	const parent = dirname(path);
	if (!existsSync(parent)) {
		await fs.mkdir(parent, { recursive: true });
	}

	await fs.writeFile(path, data, { encoding: "utf8", flag: "w" });
}

/**
 * Writes the specified data to the path, relative to the project root. The name of the file will be
 * updated to include `.g` to denote its contents were automatically generated.
 * @param path Path, relative to the project root, where the file should be written.
 * @param data Data to write to the file.
 */
export function writeGeneratedFile(path: string, data: string): Promise<void> {
	const { dir, ext, name } = parse(path);
	path = this.resolve(dir, `${name}.g${ext}`);

	return writeFile(path, data);
}
