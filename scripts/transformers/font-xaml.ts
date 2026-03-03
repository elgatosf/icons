import * as utils from "../utils.ts";
import type { ParsedIconEntry } from "./font-types.ts";

const fontName = "elgato-icons";

/**
 * Generates a XAML ResourceDictionary file from the parsed icon entries.
 * @param entries Parsed icon entries
 * @param useLegacySyntax If true, uses legacy keys and includes synthetic l/m entries; if false, uses CSS-style keys
 */
export async function generateXamlResourceDictionary(
	entries: Map<string, ParsedIconEntry>,
	useLegacySyntax = true,
): Promise<void> {
	// Filter out synthetic entries when not using legacy syntax
	const filteredEntries = useLegacySyntax ? [...entries.values()] : [...entries.values()].filter((e) => !e.isSynthetic);

	const sortedEntries = filteredEntries.sort((a, b) =>
		(useLegacySyntax ? a.legacyXamlKey : a.cssXamlKey).localeCompare(useLegacySyntax ? b.legacyXamlKey : b.cssXamlKey),
	);

	const xamlEntries = sortedEntries.map(({ legacyXamlKey, cssXamlKey, hexCode }) => {
		const key = useLegacySyntax ? legacyXamlKey : cssXamlKey;
		return `    <x:String x:Key="${key}">&#x${hexCode};</x:String>`;
	});

	const xamlContent = `<?xml version="1.0" encoding="us-ascii"?>
<ResourceDictionary xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation">
${xamlEntries.join("\n")}
</ResourceDictionary>
`;

	await utils.writeFile(utils.resolve("font", `${fontName}.xaml`), xamlContent);
}
