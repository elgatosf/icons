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
const IconNumberedList = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2 3.75A.75.75 0 0 1 2.75 3H4.5a.75.75 0 0 1 .75.75V8.5h1a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5h1v-4h-1A.75.75 0 0 1 2 3.75M9.75 6a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 10.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm-7-2.5a.75.75 0 0 0 0 1.5h2.5a.25.25 0 0 1 .25.25v.496a.25.25 0 0 1-.181.24l-2.05.586A1.75 1.75 0 0 0 2 18.754v1.496c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H3.5v-.746a.25.25 0 0 1 .181-.24l2.05-.586A1.75 1.75 0 0 0 7 16.246v-.496A1.75 1.75 0 0 0 5.25 14z" />
				</svg>
			);
	}
};
export default IconNumberedList;
