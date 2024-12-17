/**
 * Map of shirt sizes, and their respective pixel sizes.
 */
export const sizeMap = {
	s: 16,
	m: 24,
	l: 32,
} as const;

/**
 * Size of an icon, denoted as a shirt size.
 */
export type Size = "s" | "m" | "l";
