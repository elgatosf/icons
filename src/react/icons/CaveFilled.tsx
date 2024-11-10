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
const IconCaveFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M17.433 9.338a.75.75 0 0 1-1.057.825l-2.305-1.09a.75.75 0 1 0-.642 1.355l5.327 2.52a2 2 0 0 1 1.085 1.323l1.307 5.23h1.102a.75.75 0 0 1 0 1.5h-5.366a2 2 0 0 1-1.886-1.335l-1.05-2.978a.5.5 0 0 0-.224-.267l-2.168-1.24a.5.5 0 0 0-.638.123l-1.168 1.46a.5.5 0 0 0-.093.183l-.685 2.568A2 2 0 0 1 7.04 21H1.75a.75.75 0 0 1 0-1.5h1.08l1.362-7.258a2 2 0 0 1 .551-1.046l3.045-3.045a.5.5 0 0 0 .111-.168l1.419-3.546a2 2 0 0 1 2.684-1.078l3.726 1.693a2 2 0 0 1 1.133 1.429z" />
				</svg>
			);
	}
};
export default IconCaveFilled;
