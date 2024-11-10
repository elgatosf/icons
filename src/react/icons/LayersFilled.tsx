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
const IconLayersFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M21.674 7.505a1 1 0 0 1 0 1.688l-8.6 5.473a2 2 0 0 1-2.148 0l-8.6-5.473a1 1 0 0 1 0-1.688l8.6-5.473a2 2 0 0 1 2.148 0z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M1.98 11.736a.75.75 0 0 1 1.036-.23l8.716 5.546a.5.5 0 0 0 .537 0l8.715-5.546a.75.75 0 1 1 .805 1.266l-8.715 5.546a2 2 0 0 1-2.148 0l-8.715-5.546a.75.75 0 0 1-.23-1.036Z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M1.98 15.386a.75.75 0 0 1 1.036-.23l8.716 5.546a.5.5 0 0 0 .537 0l8.715-5.546a.75.75 0 1 1 .805 1.266l-8.715 5.546a2 2 0 0 1-2.148 0l-8.715-5.546a.75.75 0 0 1-.23-1.036Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLayersFilled;
