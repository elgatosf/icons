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
const IconAccessibilityFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-4.775.77a.75.75 0 0 1 1.025-.275 7.5 7.5 0 0 0 7.5 0 .75.75 0 0 1 .75 1.3 9 9 0 0 1-3.75 1.174v1.522l2.59 3.296a.75.75 0 0 1-1.18.926L12 15.463l-2.16 2.75a.75.75 0 0 1-1.18-.926l2.59-3.296v-1.522a9 9 0 0 1-3.75-1.175.75.75 0 0 1-.275-1.024"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconAccessibilityFilled;
