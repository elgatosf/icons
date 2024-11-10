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
const IconDiagram = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M21 11h-8V3c0-.552.45-1.006.998-.944a9 9 0 0 1 7.947 7.946c.06.549-.393.998-.945.998m-1.07-2.87q.275.666.419 1.37H14.5V3.652a7.5 7.5 0 0 1 5.43 4.478"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M11 5c0-.552-.45-1.006-.998-.944a9 9 0 1 0 9.943 9.942c.06-.549-.393-.998-.945-.998h-8zm-1.5 9.5h8.849A7.5 7.5 0 1 1 9.5 5.652z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconDiagram;
