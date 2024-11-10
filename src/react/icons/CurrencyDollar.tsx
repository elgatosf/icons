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
const IconCurrencyDollar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12.75 1.75a.75.75 0 0 0-1.5 0v1.283c-3.086.28-5.251 2.279-5.26 4.957 0 3.128 2.725 3.871 5.26 4.448v7.015c-3.285-.335-4.263-2.851-4.3-2.963a.75.75 0 1 0-1.41.51c.057.161 1.344 3.61 5.71 3.97v1.28a.75.75 0 0 0 1.5 0v-1.284c3.035-.278 5.24-2.21 5.24-4.716 0-3.428-2.723-4.392-5.24-4.995V4.54c3.128.339 3.727 2.737 3.76 2.868v.002c.09.4.49.65.89.57.41-.09.67-.48.58-.89-.28-1.32-1.735-3.75-5.23-4.058zm-1.5 2.79C9.03 4.792 7.49 6.168 7.49 8c0 1.864 1.416 2.362 3.76 2.91zm1.5 8.25v6.658c2.181-.246 3.74-1.546 3.74-3.208 0-2.117-1.389-2.845-3.74-3.45"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconCurrencyDollar;
