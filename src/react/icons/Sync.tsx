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
const IconSync = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.346 9.025A.75.75 0 0 1 5.072 8 8 8 0 0 1 17.5 6.19V4A.75.75 0 0 1 19 4v4.25a.75.75 0 0 1-.75.75H14a.75.75 0 0 1 0-1.5h2.69A6.5 6.5 0 0 0 6.37 8.75a.75.75 0 0 1-1.024.275m13.308 5.95A.75.75 0 0 1 18.928 16 8 8 0 0 1 6.5 17.81V20A.75.75 0 0 1 5 20v-4.25a.75.75 0 0 1 .75-.75H10a.75.75 0 0 1 0 1.5H7.31a6.5 6.5 0 0 0 10.32-1.25.75.75 0 0 1 1.024-.275" />
				</svg>
			);
	}
};
export default IconSync;
