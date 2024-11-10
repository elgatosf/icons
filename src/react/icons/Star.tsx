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
const IconStar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="m8.684 7.463-5.41.786a1 1 0 0 0-.553 1.706l3.914 3.815-.924 5.388a1 1 0 0 0 1.45 1.054l4.84-2.544 4.837 2.544a1 1 0 0 0 1.451-1.054l-.924-5.388 3.915-3.815a1 1 0 0 0-.555-1.706l-5.41-.786-2.418-4.902a1 1 0 0 0-1.794 0zm5.636 1.371L12 4.134l-2.32 4.7-5.187.754 3.754 3.659-.887 5.166 4.64-2.44 4.64 2.44-.886-5.166 3.753-3.66z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconStar;
