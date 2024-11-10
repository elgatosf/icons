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
const IconStreamOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-1.49 1.49a11 11 0 0 1-.512 15.008.75.75 0 0 1-1.06-1.06 9.5 9.5 0 0 0 .509-12.884l-1.775 1.775a7 7 0 0 1 1.015 7.07 7 7 0 0 1-1.517 2.27.75.75 0 1 1-1.06-1.06 5.5 5.5 0 0 0 .493-7.211l-1.798 1.798a3 3 0 0 1-4.109 4.109l-2.36 2.36-.01.01-2.819 2.818-.01.01L3.28 21.78a.75.75 0 0 1-1.06 0m9.391-8.33a1.5 1.5 0 0 0 1.838-1.838z"
						clipRule="evenodd"
					/>
					<path d="m2.796 18.024 1.088-1.087A9.5 9.5 0 0 1 2.5 12a9.5 9.5 0 0 1 2.782-6.717.75.75 0 0 0-1.06-1.061 11 11 0 0 0-1.426 13.803Z" />
					<path d="M5.723 15.098 6.86 13.96a5.5 5.5 0 0 1 1.25-5.849.75.75 0 1 0-1.06-1.06 7 7 0 0 0-1.328 8.047Zm6.092-6.092-2.81 2.81a3 3 0 0 1 2.81-2.81" />
				</svg>
			);
	}
};
export default IconStreamOff;
