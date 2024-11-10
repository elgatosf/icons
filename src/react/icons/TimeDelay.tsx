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
const IconTimeDelay = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10.88 2.063a10 10 0 0 1 2.24 0 .75.75 0 0 1-.168 1.49 8.5 8.5 0 0 0-1.904 0 .8.8 0 0 1-.156.002.8.8 0 0 1-.151.039 8.5 8.5 0 0 0 .3 16.852h.007a8.5 8.5 0 0 0 1.904 0 .75.75 0 1 1 .168 1.491 10 10 0 0 1-2.24 0h-.008a10 10 0 0 1-2.863-.768l-.008-.003Q7.488 20.942 7 20.66l-.008-.005A9.999 9.999 0 0 1 10.518 2.11a.8.8 0 0 1 .184-.005.8.8 0 0 1 .178-.042m4.131 1.159A.75.75 0 0 1 16 2.834a10 10 0 0 1 1.94 1.12.75.75 0 0 1-.892 1.207 8.5 8.5 0 0 0-1.648-.952.75.75 0 0 1-.387-.987Zm3.986 2.682a.75.75 0 0 1 1.049.158 10 10 0 0 1 1.12 1.94.75.75 0 1 1-1.375.599 8.5 8.5 0 0 0-.952-1.648.75.75 0 0 1 .158-1.05Zm2.111 4.315a.75.75 0 0 1 .829.661 10 10 0 0 1 0 2.24.75.75 0 0 1-1.49-.168 8.5 8.5 0 0 0 0-1.904.75.75 0 0 1 .66-.829Zm-.33 4.793a.75.75 0 0 1 .388.987 10 10 0 0 1-1.12 1.94.75.75 0 0 1-1.207-.892 8.5 8.5 0 0 0 .952-1.648.75.75 0 0 1 .987-.387m-2.682 3.985a.75.75 0 0 1-.158 1.049 10 10 0 0 1-1.94 1.12.75.75 0 1 1-.599-1.375 8.5 8.5 0 0 0 1.648-.952.75.75 0 0 1 1.05.158Z" />
					<path d="M12 5a.75.75 0 0 1 .75.75v5.94l3.03 3.03a.75.75 0 1 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1-.22-.53V5.75A.75.75 0 0 1 12 5" />
				</svg>
			);
	}
};
export default IconTimeDelay;
