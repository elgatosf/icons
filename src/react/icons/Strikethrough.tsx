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
const IconStrikethrough = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 21c-4.966-.003-6.395-3.83-6.455-4a.75.75 0 1 1 1.41-.51c.04.12 1.16 3 5.04 3 2.57 0 4.5-1.4 4.5-3.25 0-1.397-.605-2.19-1.692-2.74H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5h-3.104c.526.682.849 1.57.849 2.75 0 2.709-2.578 4.748-5.996 4.75Zm0 0h-.005.01-.006ZM6.877 10.5H9.72C8.307 10.04 7.495 9.411 7.495 8c0-2.03 1.89-3.5 4.5-3.5 3.794 0 4.484 2.767 4.52 2.908v.002c.09.4.49.65.89.57.41-.09.67-.48.58-.89-.3-1.41-1.94-4.09-5.98-4.09-3.48 0-6 2.1-6.01 4.99 0 1.099.336 1.904.882 2.51" />
				</svg>
			);
	}
};
export default IconStrikethrough;
