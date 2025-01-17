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
export type Size = "s" | "m" | "l";

/**
 * Validates the specified size is a known, and valid, size.
 * @param size Size to validate.
 * @returns `true` when the size is valid; otherwise `false`.
 */
export function isValidSize(size: string): size is Size {
	return size in sizeMap;
}
