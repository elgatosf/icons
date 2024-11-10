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
const IconLogoTelegram = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M3.375 10.848q8.054-3.51 10.74-4.626c5.114-2.128 6.177-2.497 6.87-2.51.152-.002.493.036.713.215.186.15.238.355.262.498s.055.47.031.725c-.277 2.912-1.476 9.98-2.086 13.24-.259 1.38-.767 1.843-1.259 1.889-1.07.098-1.881-.707-2.917-1.386-1.621-1.063-2.537-1.724-4.11-2.76-1.818-1.199-.64-1.857.396-2.934.272-.281 4.984-4.567 5.075-4.956.011-.049.022-.23-.086-.326-.108-.095-.266-.063-.381-.037q-.244.056-7.768 5.135-1.102.756-1.997.737c-.658-.014-1.923-.371-2.863-.677-1.153-.375-2.07-.573-1.99-1.21q.062-.497 1.37-1.017"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLogoTelegram;
