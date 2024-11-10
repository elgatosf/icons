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
const IconRotate180 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M17.499 4a.75.75 0 0 1 1.5 0v4.25a.75.75 0 0 1-.75.75h-4.25a.75.75 0 0 1 0-1.5h2.69A6.5 6.5 0 0 0 5.5 12 .75.75 0 0 1 4 12a8 8 0 0 1 13.5-5.81V4Zm1.001 7.982a.75.75 0 1 1 1.5-.002 8 8 0 0 1-.442 2.643.75.75 0 1 1-1.418-.49 6.5 6.5 0 0 0 .36-2.15Zm-1.893 4.603a.75.75 0 1 1 1.063 1.058 8 8 0 0 1-2.181 1.556.75.75 0 0 1-.656-1.349 6.5 6.5 0 0 0 1.774-1.265M4.8 15.49a.75.75 0 1 1 1.349-.656 6.5 6.5 0 0 0 1.265 1.774.75.75 0 1 1-1.059 1.063A8 8 0 0 1 4.8 15.49m7.216 3.011a.75.75 0 1 1 .002 1.5 8 8 0 0 1-2.642-.442.75.75 0 1 1 .49-1.418 6.6 6.6 0 0 0 2.15.36" />
				</svg>
			);
	}
};
export default IconRotate180;
