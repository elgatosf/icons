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
const IconFilterAltFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9 12.333 3.671 7.597A2 2 0 0 1 3 6.102V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.102a2 2 0 0 1-.671 1.495L15 12.333v8.532a1 1 0 0 1-1.64.768L9.72 18.6A2 2 0 0 1 9 17.063z" />
				</svg>
			);
	}
};
export default IconFilterAltFilled;
