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
const IconLogoWaveLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.75 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M14 6.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm1 8.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-1.5 0zm-3.5-4.5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm-2.5-2a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zm8.5 4.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0z" />
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLogoWaveLink;
