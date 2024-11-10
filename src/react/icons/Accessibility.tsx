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
const IconAccessibility = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M14.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						clipRule="evenodd"
					/>
					<path d="M8.25 9.995a.75.75 0 0 0-.75 1.3 9 9 0 0 0 3.75 1.174v1.522l-2.59 3.296a.75.75 0 0 0 1.18.926l2.16-2.75 2.16 2.75a.75.75 0 0 0 1.18-.926l-2.59-3.296v-1.522a9 9 0 0 0 3.75-1.175.75.75 0 0 0-.75-1.299 7.5 7.5 0 0 1-7.5 0" />
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconAccessibility;
