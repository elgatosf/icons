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
const IconBriefcaseFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v2a4 4 0 0 1-1.293 2.945A3.99 3.99 0 0 1 18 15h-5.25v-.75a.75.75 0 0 0-1.5 0V15H6c-1.044 0-1.994-.4-2.707-1.055A4 4 0 0 1 2 11V9a2 2 0 0 1 2-2zm2-2.5h4a.5.5 0 0 1 .5.5v2h-5V5a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
					<path d="M3 15.61V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.39a5.47 5.47 0 0 1-3 .89h-5.25v.75a.75.75 0 0 1-1.5 0v-.75H6a5.47 5.47 0 0 1-3-.89" />
				</svg>
			);
	}
};
export default IconBriefcaseFilled;
