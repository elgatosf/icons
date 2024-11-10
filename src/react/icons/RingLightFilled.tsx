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
const IconRingLightFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M20 10a8 8 0 0 1-7.25 7.965v3.285a.75.75 0 0 1-1.5 0v-3.285A8 8 0 1 1 20 10m-3.446 4.638a6.5 6.5 0 1 0-9.108 0l2.667-1.54c.496-.287.886-.512 1.315-.604a2.75 2.75 0 0 1 1.144 0c.429.092.819.317 1.315.605z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconRingLightFilled;
