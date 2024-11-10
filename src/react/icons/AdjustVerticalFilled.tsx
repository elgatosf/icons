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
const IconAdjustVerticalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 8.75a3.75 3.75 0 0 0 3 3.675v8.825a.75.75 0 0 0 1.5 0v-8.825a3.751 3.751 0 0 0 0-7.35V2.75a.75.75 0 1 0-1.5 0v2.325A3.75 3.75 0 0 0 4 8.75m8.5 6.5a3.75 3.75 0 0 1 3-3.675V2.75a.75.75 0 0 1 1.5 0v8.825a3.751 3.751 0 0 1 0 7.35v2.325a.75.75 0 0 1-1.5 0v-2.325a3.75 3.75 0 0 1-3-3.675" />
				</svg>
			);
	}
};
export default IconAdjustVerticalFilled;
