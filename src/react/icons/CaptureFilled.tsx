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
const IconCaptureFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2 2.75A.75.75 0 0 1 2.75 2h2.5a.75.75 0 0 1 0 1.5H3.5v1.75a.75.75 0 0 1-1.5 0zm0 18.5v-2.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m16 0c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v1.75h-1.75a.75.75 0 0 0-.75.75m4-18.5v2.5a.75.75 0 0 1-1.5 0V3.5h-1.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75M13.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
					<path
						fillRule="evenodd"
						d="m8 6.5.703-1.055A1 1 0 0 1 9.535 5h4.93a1 1 0 0 1 .832.445L16 6.5h2a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2zm7 5.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconCaptureFilled;
