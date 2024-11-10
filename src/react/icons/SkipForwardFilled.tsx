/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */
import type { SVGProps } from "react";
import type { IconProps } from "../types";
const SIZE_MAP = {
	s: 16,
	m: 24,
	l: 32,
};
const IconSkipForwardFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M22 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0zm-5 6.518c1.333.77 1.333 2.694 0 3.464L5 20.66c-1.333.77-3-.192-3-1.732V5.072C2 3.532 3.667 2.57 5 3.34z" />
				</svg>
			);
	}
};
export default IconSkipForwardFilled;
