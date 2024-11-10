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
const IconLearnFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="m10.926 15.967-8.6-5.473a1 1 0 0 1 0-1.688l8.6-5.473a2 2 0 0 1 2.148 0l8.6 5.473a1 1 0 0 1 0 1.688l-.674.429v5.327a.75.75 0 0 1-1.5 0v-4.373l-6.426 4.09a2 2 0 0 1-2.148 0" />
					<path d="m6 14.61 4.12 2.622a3.5 3.5 0 0 0 3.759 0L18 14.61v2.032a2 2 0 0 1-.971 1.715l-4 2.4a2 2 0 0 1-2.058 0l-4-2.4A2 2 0 0 1 6 16.642z" />
				</svg>
			);
	}
};
export default IconLearnFilled;
