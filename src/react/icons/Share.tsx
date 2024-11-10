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
const IconShare = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.53 6.28a.75.75 0 1 1-1.06-1.06l3.005-3.006a.75.75 0 0 1 1.06 0l3.006 3.006a.75.75 0 0 1-1.06 1.06L12.75 4.55v9.7a.75.75 0 0 1-1.5 0V4.56z" />
					<path d="M9 8.75A.75.75 0 0 0 8.25 8H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2.25a.75.75 0 0 0 0 1.5H18a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h2.25A.75.75 0 0 0 9 8.75" />
				</svg>
			);
	}
};
export default IconShare;
