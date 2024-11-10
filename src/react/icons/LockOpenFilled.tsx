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
const IconLockOpenFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10.756 2.997A3.25 3.25 0 0 1 15.25 6v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1.25V6a4.75 4.75 0 0 0-8.864-2.375.75.75 0 1 0 1.3.75 3.25 3.25 0 0 1 1.57-1.378M13.5 14.5a1.5 1.5 0 0 1-.75 1.3v1.45a.75.75 0 0 1-1.5 0V15.8a1.5 1.5 0 1 1 2.25-1.3"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLockOpenFilled;
