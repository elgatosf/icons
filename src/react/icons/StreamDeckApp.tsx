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
const IconStreamDeckApp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17m0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
						clipRule="evenodd"
					/>
					<path d="M8 8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M8 12a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 8 12m0 3.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m10.5-7a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0 3.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0 3.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-3.5-7a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0 3.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0 3.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-3.5-7a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0 3.5A1.25 1.25 0 1 1 9 12a1.25 1.25 0 0 1 2.5 0m0 3.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
				</svg>
			);
	}
};
export default IconStreamDeckApp;
