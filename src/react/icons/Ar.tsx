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
const IconAr = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2.75 2a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V3.5h1.75a.75.75 0 0 0 0-1.5zM2 18.75v2.5a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 0-1.5H3.5v-1.75a.75.75 0 0 0-1.5 0M21.25 22h-2.5a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75M22 5.25v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0" />
					<path
						fillRule="evenodd"
						d="M13 4.494a2 2 0 0 0-2 0L6 7.381a2 2 0 0 0-1 1.732v5.774a2 2 0 0 0 1 1.732l5 2.887a2 2 0 0 0 2 0l5-2.887a2 2 0 0 0 1-1.732V9.113a2 2 0 0 0-1-1.732zm3.75 3.898-4.5-2.598a.5.5 0 0 0-.5 0l-4.5 2.598L12 11.134zm.75 1.299-4.75 2.742v5.485l4.5-2.598a.5.5 0 0 0 .25-.433V9.69Zm-6.25 8.227v-5.485L6.5 9.691v5.196a.5.5 0 0 0 .25.433z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconAr;
