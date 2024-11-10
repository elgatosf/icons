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
const IconVolumeMutedFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11 18.586V5.414c0-.89-1.077-1.337-1.707-.707L6 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l3.293 3.293c.63.63 1.707.184 1.707-.707m3.22-2.806a.75.75 0 0 1 0-1.06L16.94 12l-2.72-2.72a.75.75 0 0 1 1.06-1.06L18 10.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L19.06 12l2.72 2.72a.75.75 0 1 1-1.06 1.06L18 13.06l-2.72 2.72a.75.75 0 0 1-1.06 0" />
				</svg>
			);
	}
};
export default IconVolumeMutedFilled;
