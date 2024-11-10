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
const Icon2CircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm9.772 13H9.03v-1.309l.223-.176c1.21-.956 3.781-2.986 3.781-4.389 0-.682-.429-1.11-1.067-1.11-.715 0-1.122.494-1.144 1.231h-1.66c.031-1.727 1.417-2.397 2.88-2.397 1.31 0 2.684.693 2.684 2.211 0 1.59-1.752 3.043-3.066 4.132-.258.214-.499.414-.707.598h3.817z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default Icon2CircleFilled;
