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
const IconMicrophoneOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06L15 10.06V12a3 3 0 0 1-4.524 2.585l-1.083 1.083A4.5 4.5 0 0 0 16.5 12a.75.75 0 0 1 1.5 0 6 6 0 0 1-5.25 5.953V20.5h1.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h1.5v-2.547a6 6 0 0 1-2.929-1.213l-5.04 5.04a.75.75 0 0 1-1.061 0m4.257-7.436 1.177-1.177A4.5 4.5 0 0 1 7.5 12 .75.75 0 0 0 6 12a6 6 0 0 0 .477 2.344M9 5v6.82l6-6V5a3 3 0 1 0-6 0" />
				</svg>
			);
	}
};
export default IconMicrophoneOffFilled;
