/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
import type { SVGProps } from "react";
import type { IconProps } from "../types.js";
const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
};
const IconWarningFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const sizeName = props.size || "m";
	const size = SIZE_MAP[sizeName];
	const label = props.label ?? "Icon";
	switch (sizeName) {
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M8.866 1.5a1 1 0 0 0-1.732 0l-6.351 11a1 1 0 0 0 .866 1.5H14.35a1 1 0 0 0 .866-1.5l-6.351-11Zm-.366 3a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zm.25 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
						clipRule="evenodd"
					/>
				</svg>
			);
		// case 'm':
		// case 'l':
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M10.268 3.948c.77-1.334 2.694-1.334 3.464 0L21.268 17c.77 1.333-.192 3-1.732 3H4.464c-1.54 0-2.502-1.667-1.732-3zM12 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 12 8m0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconWarningFilled;
