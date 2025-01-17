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
 * Gets the pixel size from the specified shirt size.
 * @param shirtSize Shirt size.
 * @returns The pixel size, or undefined.
 */
export function getPixelSize(shirtSize: Size): string | undefined {
	if (shirtSize in sizeMap) {
		return sizeMap[shirtSize].toString();
	}
}

/**
 * Gets the shirt size from the specified pixel size.
 * @param pixelSize Pixel size.
 * @returns The shirt size, or undefined.
 */
export function getShirtSize(pixelSize: string): Size | undefined {
	for (const [shirtSize, value] of Object.entries(sizeMap)) {
		if (value.toString() === pixelSize) {
			return shirtSize as Size;
		}
	}
}
