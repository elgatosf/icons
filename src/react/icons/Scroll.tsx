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
const IconScroll = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8.22 6.78a.75.75 0 0 0 1.06 0L12 4.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25a.75.75 0 0 0-1.06 0L8.22 5.72a.75.75 0 0 0 0 1.06M6.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm2.53 3.72a.75.75 0 0 0-1.06 1.06l3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L12 19.94z" />
				</svg>
			);
	}
};
export default IconScroll;
