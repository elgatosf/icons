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
const Icon6CircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M13.54 13.371c0-.88-.418-1.595-1.32-1.595-1.034 0-1.419.76-1.419 1.628 0 .88.506 1.584 1.386 1.584.902 0 1.353-.726 1.353-1.617" />
					<path
						fillRule="evenodd"
						d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10.07 10.305c0 1.716-1.277 2.838-2.883 2.838-2.354 0-3.113-1.914-3.113-4.07s.781-4.224 3.168-4.224c1.397 0 2.574.638 2.574 2.145h-1.584c0-.737-.418-1.067-1.045-1.067-1.33 0-1.55 1.815-1.562 2.882.451-.792 1.111-1.11 1.98-1.11 1.386 0 2.464 1.011 2.464 2.606Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default Icon6CircleFilled;
