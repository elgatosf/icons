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
const IconLogoFacebook = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.69 3.229 8.625 7.584 9.706v-6.65H7.522V12h2.062v-1.317c0-3.403 1.54-4.981 4.882-4.981.634 0 1.727.124 2.174.248v2.77a13 13 0 0 0-1.155-.037c-1.64 0-2.273.621-2.273 2.236V12h3.266l-.56 3.056h-2.706v6.87A9.997 9.997 0 0 0 22 12" />
				</svg>
			);
	}
};
export default IconLogoFacebook;
