/**
 * Map of shirt sizes, and their respective pixel sizes.
 */
export const sizeMap = {
	s: 16,
	m: 20,
	l: 24,
} as const;

/**
 * Size of an icon, denoted as a shirt size.
 */
export type Size = keyof typeof sizeMap;
