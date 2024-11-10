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
const IconCartFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M1 4.75A.75.75 0 0 1 1.75 4h1.326a1.75 1.75 0 0 1 1.622 1.093L5.065 6H20.25a.75.75 0 0 1 .7 1.018l-2.758 7.214A2.75 2.75 0 0 1 15.623 16H9.348A2.75 2.75 0 0 1 6.8 14.282L3.308 5.656a.25.25 0 0 0-.232-.156H1.75A.75.75 0 0 1 1 4.75M8.5 17a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m9.5 1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
				</svg>
			);
	}
};
export default IconCartFilled;
