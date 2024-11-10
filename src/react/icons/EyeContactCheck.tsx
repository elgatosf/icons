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
const IconEyeContactCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2 2.75A.75.75 0 0 1 2.75 2h2.5a.75.75 0 0 1 0 1.5H3.5v1.75a.75.75 0 0 1-1.5 0zm0 18.5v-2.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m20-18.5v2.5a.75.75 0 0 1-1.5 0V3.5h-1.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75M9 12a3 3 0 0 0 2.515 2.96 6.5 6.5 0 0 1 .91-1.52 1.5 1.5 0 1 1 1.014-1.016 6.5 6.5 0 0 1 1.522-.91A3 3 0 0 0 9 12" />
					<path d="M4.963 12c.952 1.445 3.067 3.996 6.124 4.435a6.6 6.6 0 0 0-.072 1.504c-3.82-.474-6.31-3.605-7.304-5.114a1.5 1.5 0 0 1 0-1.65C4.787 9.54 7.623 6 12 6s7.212 3.54 8.29 5.175c.114.174.189.367.224.564a6.5 6.5 0 0 0-2.163-.684C17.09 9.473 14.92 7.5 12 7.5c-3.55 0-5.993 2.916-7.037 4.5" />
					<path
						fillRule="evenodd"
						d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.646-1.854a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647 3.146-3.147a.5.5 0 0 1 .708 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconEyeContactCheck;
