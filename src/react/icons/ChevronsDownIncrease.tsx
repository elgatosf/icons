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
const IconChevronsDownIncrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.28 6.22a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06L12 10.94zm0 5a.75.75 0 0 0-1.06 1.06l4.794 4.794c.04-.613.164-1.203.362-1.759z" />
					<path
						fillRule="evenodd"
						d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m.5-8.5a.5.5 0 0 0-1 0V17h-2.5a.5.5 0 1 0 0 1H17v2.5a.5.5 0 0 0 1 0V18h2.5a.5.5 0 0 0 0-1H18z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconChevronsDownIncrease;
