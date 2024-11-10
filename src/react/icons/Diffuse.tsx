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
const IconDiffuse = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10.2 3H6.6v2.6h3.6v2.6H6.6v3.6H3V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.2h-3.6V8.2H21V5.6h-3.6V3h-3.6v2.6h3.6v2.6h-3.6v3.6h3.6v3.6h-3.6v-3.6h-3.6V8.2h3.6V5.6h-3.6zm0 8.8H6.6v3.6h3.6z"
						clipRule="evenodd"
					/>
					<path d="M3 5.6h3.6v2.6H3z" />
				</svg>
			);
	}
};
export default IconDiffuse;
