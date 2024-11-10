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
const IconPin = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M11.22 2.22a.75.75 0 0 1 1.06 0l9.5 9.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22-6.94 6.94 1.22 1.22a.75.75 0 1 1-1.06 1.06L8.5 16.56l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22-4.22-4.22a.75.75 0 1 1 1.06-1.06l1.22 1.22 6.94-6.94-1.22-1.22a.75.75 0 0 1 0-1.06m.28 15.22 6.94-6.94-4.94-4.94-6.94 6.94z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconPin;
