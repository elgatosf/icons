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
const IconNight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M19.236 12.57c.776-.313 1.774.151 1.631.975A9 9 0 1 1 10.454 3.133c.825-.143 1.288.855.977 1.63a6 6 0 0 0 7.806 7.806Zm-.057 1.608a7.5 7.5 0 0 1-9.357-9.357 7.5 7.5 0 1 0 9.357 9.357"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconNight;
