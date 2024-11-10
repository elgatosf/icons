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
const IconFaceSatisfied = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M16 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-7.031 4a.75.75 0 0 0-1.3.75 5 5 0 0 0 8.661 0 .75.75 0 0 0-1.299-.75 3.5 3.5 0 0 1-6.062 0m1.531-4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m8.5-10a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconFaceSatisfied;
