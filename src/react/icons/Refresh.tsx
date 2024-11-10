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
const IconRefresh = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M17.5 4A.75.75 0 0 1 19 4v4.25a.75.75 0 0 1-.75.75H14a.75.75 0 0 1 0-1.5h2.69a6.5 6.5 0 1 0 .94 7.75.75.75 0 0 1 1.298.75A8 8 0 1 1 17.5 6.19z" />
				</svg>
			);
	}
};
export default IconRefresh;
