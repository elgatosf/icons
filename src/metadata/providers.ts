/**
 * Get metadata from an SVG string.
 */
export function getSvgStringMetadata(name: string) {
	// Convert to camelCase for export name
	const exportName = name
		.split(/[-_\s]+/)
		.map((part, index) => 
			index === 0 
				? part.toLowerCase() 
				: part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
		)
		.join('');

	return {
		name,
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