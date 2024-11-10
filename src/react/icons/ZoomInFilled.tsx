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
const IconZoomInFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4.5-3a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 .75-.75"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M16.307 15.246a7.5 7.5 0 1 0-1.06 1.06l4.473 4.474a.75.75 0 1 0 1.06-1.06l-4.473-4.473ZM10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconZoomInFilled;
