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
const IconBold = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6 5a2 2 0 0 1 2-2h5a5 5 0 0 1 3.675 8.39A5.25 5.25 0 0 1 13.75 21H8a2 2 0 0 1-2-2zm9.5 3a2.5 2.5 0 0 1-2.5 2.5H8.5v-5H13A2.5 2.5 0 0 1 15.5 8m-7 5v5.5h5.25a2.75 2.75 0 1 0 0-5.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconBold;
