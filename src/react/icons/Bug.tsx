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
const IconBug = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10 2.75a.75.75 0 1 0-1.5 0v2.376A6 6 0 0 0 6.544 7.5H3.747a.75.75 0 0 0 0 1.5h2.336A6 6 0 0 0 6 10v1.5H3.747a.75.75 0 1 0 0 1.5H6v2q0 .252.02.5H3.767a.75.75 0 1 0 0 1.5h2.576a6.003 6.003 0 0 0 11.317 0h2.591a.75.75 0 0 0 0-1.5h-2.27a6 6 0 0 0 .02-.5v-2h2.25a.75.75 0 0 0 0-1.5H18V10q0-.511-.083-1h2.335a.75.75 0 0 0 0-1.5h-2.796A6 6 0 0 0 15.5 5.126V2.751a.75.75 0 0 0-1.5 0v1.59a6 6 0 0 0-2-.34 6 6 0 0 0-2 .34v-1.59ZM7.5 15v-4.5h3.941a.75.75 0 0 0-.19.5v8.438A4.5 4.5 0 0 1 7.5 15m9 0c0 2.23-1.622 4.08-3.75 4.438V11a.75.75 0 0 0-.19-.5h3.94zM12 5.5A4.5 4.5 0 0 1 16.39 9H7.612A4.5 4.5 0 0 1 12 5.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconBug;
