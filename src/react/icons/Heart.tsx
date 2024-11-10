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
const IconHeart = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="m12 7.942-1.226-1.741A4 4 0 0 0 3.5 8.5c0 2.508 1.375 4.802 3.233 6.738 1.84 1.918 3.99 3.307 5.15 3.984a.22.22 0 0 0 .234 0c1.16-.677 3.31-2.066 5.15-3.984 1.858-1.936 3.233-4.23 3.233-6.739a4 4 0 0 0-7.274-2.3zm-1.042-3.719A5.5 5.5 0 0 0 2 8.5c0 6.136 6.692 10.598 9.127 12.019a1.72 1.72 0 0 0 1.745 0C15.309 19.098 22 14.636 22 8.5a5.5 5.5 0 0 0-10-3.163 5.5 5.5 0 0 0-1.042-1.114"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconHeart;
