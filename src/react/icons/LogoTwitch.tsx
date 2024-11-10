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
const IconLogoTwitch = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M17.25 6.125h-1.5v4.5h1.5zm-5.625 0h1.5v4.5h-1.5z" />
					<path
						fillRule="evenodd"
						d="M3 5.75 6.75 2H21v10.5l-6.75 6.75h-3L7.5 23v-3.75H3zm13.5 9 3-3V3.5h-12v11.25h3.375v2.625L13.5 14.75z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLogoTwitch;
