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
const IconFlashFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M15.964 2.98a.75.75 0 0 0-1.268-.736l-10.5 11.5A.75.75 0 0 0 4.75 15h5.221l-1.935 6.02a.75.75 0 0 0 1.268.736l10.5-11.5A.75.75 0 0 0 19.25 9h-5.221z" />
				</svg>
			);
	}
};
export default IconFlashFilled;
