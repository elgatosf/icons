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
const IconTemperatureWarmFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M7.5 3A2.5 2.5 0 0 0 5 5.5v7.258a4.5 4.5 0 1 0 5 0V5.5A2.5 2.5 0 0 0 7.5 3m1 5V5.5a1 1 0 0 0-2 0V8z"
						clipRule="evenodd"
					/>
					<path d="M14.25 5.25a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zm3.578 1.921a.75.75 0 0 1 0-1.06l1.061-1.06a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0ZM15 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m4.75-3.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM15 14a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 15 14m3.89-1.171a.75.75 0 0 0-1.062 1.06l1.061 1.06a.75.75 0 0 0 1.06-1.06l-1.06-1.06Z" />
				</svg>
			);
	}
};
export default IconTemperatureWarmFilled;
