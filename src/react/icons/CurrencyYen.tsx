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
const IconCurrencyYen = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.338 3.124a.75.75 0 0 1 1.039.214l-1.253.824a.75.75 0 0 1 .214-1.038" />
					<path d="M17.623 3.338 12 11.886 6.377 3.338l-1.253.824L10.28 12H6.75a.75.75 0 0 0 0 1.5h4.5V16h-4.5a.75.75 0 0 0 0 1.5h4.5v2.75a.75.75 0 0 0 1.5 0V17.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-2.5h4.5a.75.75 0 0 0 0-1.5h-3.53l5.157-7.838-1.253-.824Z" />
					<path d="M17.623 3.338a.75.75 0 1 1 1.254.824l-1.253-.824Z" />
				</svg>
			);
	}
};
export default IconCurrencyYen;
