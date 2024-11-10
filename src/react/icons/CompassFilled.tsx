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
const IconCompassFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const sizeName = props.size || "m";
	const size = SIZE_MAP[sizeName];
	const label = props.label ?? "Icon";
	switch (sizeName) {
		// case 's':
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
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-5.086-6.22c-.338.823.484 1.645 1.305 1.306l5.896-2.427a1 1 0 0 0 .544-.544l2.427-5.896c.339-.822-.483-1.644-1.305-1.305L9.886 9.34a1 1 0 0 0-.544.544zm8.329-7.022-4.594 1.891 2.702 2.702z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconCompassFilled;
