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
const IconVolume2Filled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11 18.586V5.414c0-.89-1.077-1.337-1.707-.707L6 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l3.293 3.293c.63.63 1.707.184 1.707-.707m1.768-9.415a.75.75 0 0 1 1.06 0 4 4 0 0 1 0 5.657.75.75 0 1 1-1.06-1.06 2.5 2.5 0 0 0 0-3.536.75.75 0 0 1 0-1.06Z" />
					<path d="M16.303 6.697a.75.75 0 0 0-1.06 1.06 6 6 0 0 1 0 8.486.75.75 0 0 0 1.06 1.06 7.5 7.5 0 0 0 0-10.606" />
				</svg>
			);
	}
};
export default IconVolume2Filled;
