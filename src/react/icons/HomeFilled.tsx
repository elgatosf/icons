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
const IconHomeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 8.978A2 2 0 0 1 3.772 7.4l7-5.444a2 2 0 0 1 2.456 0l7 5.444A2 2 0 0 1 21 8.98V19a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-6h-3v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
				</svg>
			);
	}
};
export default IconHomeFilled;
