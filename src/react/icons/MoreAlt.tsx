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
const IconMoreAlt = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m5-1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
				</svg>
			);
	}
};
export default IconMoreAlt;
