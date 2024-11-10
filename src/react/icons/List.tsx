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
const IconList = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 6.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m17-1a.75.75 0 0 1-.75.75H7.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 .75.75M7 12a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H7.75A.75.75 0 0 1 7 12m14 6.25a.75.75 0 0 1-.75.75H7.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 .75.75M5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 7.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
				</svg>
			);
	}
};
export default IconList;
