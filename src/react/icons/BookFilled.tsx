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
const IconBookFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11.25 5.615a7.29 7.29 0 0 0-9.03 1.02.75.75 0 0 0-.22.53V18.75a.75.75 0 0 0 1.28.53 5.79 5.79 0 0 1 7.97-.208zm1.5 13.457a5.79 5.79 0 0 1 7.97.208.75.75 0 0 0 1.28-.53V7.166a.75.75 0 0 0-.22-.53 7.29 7.29 0 0 0-9.03-1.021z" />
				</svg>
			);
	}
};
export default IconBookFilled;
