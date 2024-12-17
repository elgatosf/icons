import type { Size } from "../metadata/sizing.js";

/**
 * Icon component properties.
 */
export interface IconProps {
	/**
	 * Size of the icon, as a shirt size.
	 */
	size?: Size;

	/**
	 * Optional label.
	 */
	label?: string;

	/**
	 * Optional class name.
	 */
	className?: string;
}
