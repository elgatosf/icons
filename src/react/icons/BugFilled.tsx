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
const IconBugFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.25 2a.75.75 0 0 1 .75.75v1.591a6 6 0 0 1 2-.34c.701 0 1.375.12 2 .34v-1.59a.75.75 0 0 1 1.5 0v2.375A6 6 0 0 1 17.456 7.5h2.796a.75.75 0 0 1 0 1.5H3.747a.75.75 0 0 1 0-1.5h2.797A6 6 0 0 1 8.5 5.126V2.751A.75.75 0 0 1 9.25 2M2.997 12.25a.75.75 0 0 1 .75-.75H6v-1h5.25v10.454A6.01 6.01 0 0 1 6.342 17H3.766a.75.75 0 0 1 0-1.5h2.255A6 6 0 0 1 6 15v-2H3.746a.75.75 0 0 1-.75-.75Zm9.753-1.75H18v1h2.25a.75.75 0 1 1 0 1.5H18v2q0 .252-.02.5h2.27a.75.75 0 1 1 0 1.5h-2.59a6.01 6.01 0 0 1-4.909 3.954V10.5Z" />
				</svg>
			);
	}
};
export default IconBugFilled;
