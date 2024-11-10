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
const IconRingLight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12.75 17.965a8 8 0 1 0-1.5 0v3.285a.75.75 0 0 0 1.5 0zm2.511-2.341A6.47 6.47 0 0 1 12 16.5a6.47 6.47 0 0 1-3.261-.876l2.036-1.176c.627-.362.8-.451.965-.486a1.25 1.25 0 0 1 .52 0c.166.035.338.124.965.486zm1.293-.986-2.667-1.54c-.496-.287-.886-.512-1.315-.604a2.75 2.75 0 0 0-1.144 0c-.429.092-.819.317-1.315.605l-2.667 1.54a6.5 6.5 0 1 1 9.108 0Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconRingLight;
