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
const IconBlurBackground = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10 3.5A.75.75 0 1 1 10 2a.75.75 0 0 1 0 1.5M18 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m6-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0m9-11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0m12.25-8.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M3.5 14A.75.75 0 1 1 2 14a.75.75 0 0 1 1.5 0m11.25 7.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m6.5-8a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M3.5 10A.75.75 0 1 1 2 10a.75.75 0 0 1 1.5 0m7.25 11.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M14 3.5A.75.75 0 1 1 14 2a.75.75 0 0 1 0 1.5M11 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0m11 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0m11 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-7-2a2 2 0 0 0-2 2 1 1 0 0 0 1 1h4a1 1 0 0 0 1-1 2 2 0 0 0-2-2z" />
				</svg>
			);
	}
};
export default IconBlurBackground;
