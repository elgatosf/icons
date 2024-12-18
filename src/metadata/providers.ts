/**
 * Get metadata from an SVG string.
 */
export function getSvgStringMetadata(name: string) {
	// First, normalize the name by adding hyphens consistently
	const formattedName = name
		// Add hyphen between letters and numbers (e.g., "wifi1" -> "wifi-1")
		.replace(/([a-zA-Z])(\d)/g, '$1-$2')
		// Add hyphen between numbers and letters (e.g., "1circle" -> "1-circle")
		.replace(/(\d)([a-zA-Z])/g, '$1-$2');

	// Convert to camelCase for export name by first normalizing hyphens
	const normalizedName = formattedName
		// Replace all separators (hyphens, underscores, spaces) with hyphens
		.replace(/[-_\s]+/g, '-')
		// Convert to lowercase for consistent casing
		.toLowerCase();

	// Create export name from normalized name
	const exportName = normalizedName
		.split('-')
		.map((part, index) => {
			if (index === 0) return part;
			return part.charAt(0).toUpperCase() + part.slice(1);
		})
		.join('');

	return {
		name: formattedName,
		exportName: `icon${exportName.charAt(0).toUpperCase()}${exportName.slice(1)}`
	};
}

/**
 * Get metadata from a React component.
 */
export function getReactComponentMetadata(name: string) {
	const { exportName } = getSvgStringMetadata(name);
	return {
		name,
		exportName: exportName.replace(/^icon/, 'Icon')
	};
} 