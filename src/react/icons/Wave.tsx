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
const IconWave = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.2 8.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zM13.85 4a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V4.75a.75.75 0 0 1 .75-.75m-3.7 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m6.65 5.25a.75.75 0 1 0 1.5 0v-6.5a.75.75 0 0 0-1.5 0zM21.25 14a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75m-18.5-4a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75" />
				</svg>
			);
	}
};
export default IconWave;
