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
const IconUnorderedList = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 8.75a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 6.75A.75.75 0 0 1 9.75 6h10.5a.75.75 0 0 1 0 1.5H9.75A.75.75 0 0 1 9 6.75m.75 9.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" />
				</svg>
			);
	}
};
export default IconUnorderedList;
