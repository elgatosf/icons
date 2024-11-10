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
const IconHeartFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.5 3A5.5 5.5 0 0 0 2 8.5c0 6.136 6.692 10.598 9.127 12.019a1.72 1.72 0 0 0 1.745 0C15.309 19.098 22 14.636 22 8.5a5.5 5.5 0 0 0-10-3.163A5.5 5.5 0 0 0 7.5 3" />
				</svg>
			);
	}
};
export default IconHeartFilled;
