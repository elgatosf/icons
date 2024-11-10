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
const IconLense = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11.426 10.614A1.5 1.5 0 0 1 12 10.5.75.75 0 0 0 12 9a3 3 0 0 0-3 3 .75.75 0 0 0 1.5 0 1.5 1.5 0 0 1 .926-1.386" />
					<path
						fillRule="evenodd"
						d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-1.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLense;
