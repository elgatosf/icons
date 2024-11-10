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
const IconDialRotateCcwFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.5 3A.75.75 0 0 0 4 3v4.17a.75.75 0 0 0 1.28.53l.71-.71a8.5 8.5 0 0 1 12.02 0 .75.75 0 0 0 1.061-1.061A10 10 0 0 0 5.5 5.4z" />
					<path
						fillRule="evenodd"
						d="M19 13a7 7 0 1 1-14 0 7 7 0 0 1 14 0M8.22 9.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconDialRotateCcwFilled;
