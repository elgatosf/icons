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
const IconCalendar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M7.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2.75A.75.75 0 0 1 7.75 2m7.75 3.5v1a.75.75 0 0 0 1.5 0v-1h2a.5.5 0 0 1 .5.5v2.5h-15V6a.5.5 0 0 1 .5-.5h2v1a.75.75 0 0 0 1.5 0v-1zM4.5 10v9a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-9z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconCalendar;
