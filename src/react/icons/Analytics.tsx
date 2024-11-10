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
const IconAnalytics = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.75 3a.75.75 0 0 1 .75.75V19a.5.5 0 0 0 .5.5h15.25a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2V3.75A.75.75 0 0 1 3.75 3" />
					<path d="M19.5 10.56v1.688a.75.75 0 0 0 1.5 0V8.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69l-3.69 3.69-2.97-2.97a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 1 0 1.06 1.06l3.97-3.97 2.97 2.97a.75.75 0 0 0 1.06 0z" />
				</svg>
			);
	}
};
export default IconAnalytics;
