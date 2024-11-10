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
const IconFlash = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M15.626 2.101a.75.75 0 0 1 .338.879L14.029 9h5.221a.75.75 0 0 1 .554 1.256l-10.5 11.5a.75.75 0 0 1-1.268-.736L9.971 15H4.75a.75.75 0 0 1-.554-1.256l10.5-11.5a.75.75 0 0 1 .93-.143M6.45 13.5H11a.75.75 0 0 1 .714.98l-1.196 3.722L17.55 10.5H13a.75.75 0 0 1-.714-.98l1.196-3.722z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconFlash;
