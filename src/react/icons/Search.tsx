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
const IconSearch = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M15.246 16.307a7.5 7.5 0 1 1 1.06-1.06l4.474 4.473a.75.75 0 1 1-1.06 1.06l-4.473-4.473ZM16.5 10.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconSearch;
