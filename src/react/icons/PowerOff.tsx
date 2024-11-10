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
const IconPowerOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-2.908 2.91A9 9 0 0 1 6.19 18.872L3.28 21.78a.75.75 0 0 1-1.06 0m5.034-3.973A7.5 7.5 0 0 0 17.807 7.254z"
						clipRule="evenodd"
					/>
					<path d="m4.248 16.573 1.103-1.103a7.5 7.5 0 0 1 1.346-8.773.75.75 0 1 0-1.061-1.061 9 9 0 0 0-1.388 10.937M11.25 2.75v6.82l1.5-1.5V2.75a.75.75 0 0 0-1.5 0" />
				</svg>
			);
	}
};
export default IconPowerOff;
