import { icons } from "./icons.js";

/**
 * Catalogue on icons, and their import options.
 */
export const catalogue = {
	icons,
};

/**
 * Icons available in size small.
 */
export type SmallIcon = IconsOfSize<"s">;

/**
 * Icons available in size medium.
 */
export type MediumIcon = IconsOfSize<"m">;

/**
 * Icons available in size large.
 */
export type LargeIcon = IconsOfSize<"l">;

/**
 * Size of an icon, denoted as a shirt size.
 */
export type Size = "s" | "m" | "l";

/**
 * Utility type to extract icon names that have a given size, for example "s", "m", or "l", into a union.
 */
type IconsOfSize<S extends Size> = keyof {
	-readonly [K in keyof typeof icons as S extends SizesOf<(typeof icons)[K]> ? K : never]: true;
};

/**
 * Utility type for extracting sizes from an icon's array of sizes.
 */
type SizesOf<T extends { sizes: readonly unknown[] }> = T extends { sizes: readonly (infer U)[] } ? U : never;
