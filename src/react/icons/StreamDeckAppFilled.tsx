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
const IconStreamDeckAppFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8 8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-1.25 4.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M8 15.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m9.25-5.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M18.5 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-1.25 4.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M15 8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-1.25 4.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M15 15.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-4.75-5.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M11.5 12A1.25 1.25 0 1 1 9 12a1.25 1.25 0 0 1 2.5 0m-1.25 4.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconStreamDeckAppFilled;
