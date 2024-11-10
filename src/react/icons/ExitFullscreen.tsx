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
const IconExitFullscreen = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10 3.75a.75.75 0 0 0-1.5 0V8a.5.5 0 0 1-.5.5H3.75a.75.75 0 0 0 0 1.5H8a2 2 0 0 0 2-2zm4 16.5a.75.75 0 0 0 1.5 0V16a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5H16a2 2 0 0 0-2 2zm7-11a.75.75 0 0 1-.75.75H16a2 2 0 0 1-2-2V3.75a.75.75 0 0 1 1.5 0V8a.5.5 0 0 0 .5.5h4.25a.75.75 0 0 1 .75.75M3.75 14a.75.75 0 0 0 0 1.5H8a.5.5 0 0 1 .5.5v4.25a.75.75 0 0 0 1.5 0V16a2 2 0 0 0-2-2z" />
				</svg>
			);
	}
};
export default IconExitFullscreen;
