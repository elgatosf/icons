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
const IconDiagramFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M21 11c.552 0 1.006-.449.945-.998a9 9 0 0 0-7.947-7.946C13.449 1.994 13 2.448 13 3v8z" />
					<path d="M11 5c0-.552-.45-1.006-.998-.944a9 9 0 1 0 9.943 9.942c.06-.549-.393-.998-.945-.998h-8z" />
				</svg>
			);
	}
};
export default IconDiagramFilled;
