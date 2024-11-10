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
const IconUsb = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11.6 1.534a.5.5 0 0 1 .8 0l2 2.666a.5.5 0 0 1-.4.8h-1.25v7.787l4.362-2.181a.25.25 0 0 0 .138-.224V9H17a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.25v1.382a1.75 1.75 0 0 1-.967 1.565l-5.033 2.517v3.682a2 2 0 1 1-1.5 0v-1.682l-5.033-2.517a1.75 1.75 0 0 1-.967-1.565v-1.527a2 2 0 1 1 1.5 0v1.527a.25.25 0 0 0 .138.224l4.362 2.18V5H10a.5.5 0 0 1-.4-.8z" />
				</svg>
			);
	}
};
export default IconUsb;
