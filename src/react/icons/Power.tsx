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
const IconPower = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12.75 2.75a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0z" />
					<path d="M18.364 5.636a.75.75 0 0 0-1.06 1.06 7.5 7.5 0 1 1-10.607 0 .75.75 0 1 0-1.061-1.06 9 9 0 1 0 12.728 0" />
				</svg>
			);
	}
};
export default IconPower;
