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
const IconArrowUp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M16.72 9.78a.75.75 0 1 0 1.06-1.06l-5.25-5.25a.75.75 0 0 0-1.06 0L6.22 8.72a.75.75 0 0 0 1.06 1.06l3.97-3.97v14.444a.75.75 0 0 0 1.5 0V5.811l3.97 3.97Z" />
				</svg>
			);
	}
};
export default IconArrowUp;
