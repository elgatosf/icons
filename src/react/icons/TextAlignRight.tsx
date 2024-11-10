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
const IconTextAlignRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.75 3a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm8 5.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM3 14.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75m8.75 4.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z" />
				</svg>
			);
	}
};
export default IconTextAlignRight;
