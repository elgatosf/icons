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
const IconCameraOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06L19.06 6H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4.06l-.78.78a.75.75 0 0 1-1.06 0m6.275-5.214a5 5 0 0 0 7.07-7.07l-1.06 1.06a3.5 3.5 0 0 1-4.95 4.95z"
						clipRule="evenodd"
					/>
					<path d="M7.058 13.763 2 18.821V8a2 2 0 0 1 2-2h3l1.703-2.555A1 1 0 0 1 9.535 3h4.93a1 1 0 0 1 .832.445l.831 1.248-3.365 3.365a5 5 0 0 0-5.705 5.705" />
				</svg>
			);
	}
};
export default IconCameraOffFilled;
