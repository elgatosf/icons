import fs from "node:fs/promises";

import * as utils from "../utils.ts";
import type { FontInfoEntry, ParsedIconEntry } from "./font-types.ts";

/**
 * Parses the info.json and returns structured icon entries for both XAML and C# generation.
 */
export async function parseIconInfo(): Promise<Map<string, ParsedIconEntry>> {
	const infoPath = utils.resolve("font", "info.json");
	const infoContent = await fs.readFile(infoPath, "utf8");
	const info: Record<string, FontInfoEntry> = JSON.parse(infoContent);

	// Group icons by base name (without size) to find missing l/m variants
	const iconGroups = new Map<string, { l?: string; m?: string }>();
	for (const [name, entry] of Object.entries(info)) {
		const sizeMatch = name.match(/-([lms])$/);
		if (!sizeMatch) continue;

		const size = sizeMatch[1];
		const baseName = name.slice(0, -2); // Remove "-l", "-m", or "-s"
		const hexCode = entry.encodedCode.replace("\\", "").toUpperCase();

		if (!iconGroups.has(baseName)) {
			iconGroups.set(baseName, {});
		}
		const group = iconGroups.get(baseName)!;
		if (size === "l") group.l = hexCode;
		else if (size === "m") group.m = hexCode;
	}

	// Build entries map (keyed by legacy XAML key for deduplication)
	const entriesMap = new Map<string, ParsedIconEntry>();

	for (const [name, entry] of Object.entries(info)) {
		const hexCode = entry.encodedCode.replace("\\", "").toUpperCase();
		const parsed = convertIconName(name);
		entriesMap.set(parsed.legacyXamlKey, { ...parsed, hexCode, isSynthetic: false });
	}

	// Add missing l/m variants (synthetic entries for legacy compatibility)
	for (const [baseName, group] of iconGroups) {
		if (group.l && !group.m) {
			const parsed = convertIconName(`${baseName}-m`);
			if (!entriesMap.has(parsed.legacyXamlKey)) {
				entriesMap.set(parsed.legacyXamlKey, { ...parsed, hexCode: group.l, isSynthetic: true });
			}
		} else if (group.m && !group.l) {
			const parsed = convertIconName(`${baseName}-l`);
			if (!entriesMap.has(parsed.legacyXamlKey)) {
				entriesMap.set(parsed.legacyXamlKey, { ...parsed, hexCode: group.m, isSynthetic: true });
			}
		}
	}

	return entriesMap;
}

/**
 * Converts a CSS-style icon name to XAML keys and C# property name.
 * E.g., "accessibility-l" → { legacyXamlKey: "icon-accessibility-l-outlined", cssXamlKey: "accessibility-l", csharpName: "Accessibility_L_Outlined" }
 */
function convertIconName(name: string): Omit<ParsedIconEntry, "hexCode" | "isSynthetic"> {
	const sizeMatch = name.match(/-([lms])$/);
	const size = sizeMatch ? sizeMatch[1] : null;
	let baseName = size ? name.slice(0, -2) : name;

	// Extract style modifiers (--filled, --color, etc.)
	const modifiers: string[] = [];
	const modifierRegex = /--([a-z]+)/g;
	let match;
	while ((match = modifierRegex.exec(baseName)) !== null) {
		modifiers.push(match[1]);
	}
	baseName = baseName.replace(/--[a-z]+/g, "");

	// CSS-style key preserves the original name
	const cssXamlKey = name;

	// Legacy XAML key: icon-{concatenatedName}-{size}-{modifiers}
	const concatenatedName = baseName.replace(/-/g, "");
	let legacyXamlKey = `icon-${concatenatedName}`;
	if (size) {
		legacyXamlKey += `-${size}`;
	}
	for (const modifier of modifiers) {
		legacyXamlKey += `-${modifier}`;
	}
	if (!modifiers.includes("filled")) {
		legacyXamlKey += "-outlined";
	}

	// C# name: PascalCase with underscores - Name_Style_Size (matches CSS order)
	const pascalBaseName = toPascalCase(baseName);
	const sizeUpper = size ? size.toUpperCase() : "";
	const styleModifier = modifiers.includes("filled") ? "Filled" : modifiers.includes("color") ? "Color" : "Outlined";

	let csharpName = `${pascalBaseName}_${styleModifier}`;
	if (sizeUpper) {
		csharpName += `_${sizeUpper}`;
	}

	return { legacyXamlKey, cssXamlKey, csharpName };
}

/**
 * Converts a kebab-case string to PascalCase.
 * E.g., "adjust-horizontal" → "AdjustHorizontal"
 */
function toPascalCase(str: string): string {
	return str
		.split("-")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
}
