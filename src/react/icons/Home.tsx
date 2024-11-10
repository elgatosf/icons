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
const IconHome = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10.5 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.978A2 2 0 0 1 3.772 7.4l7-5.444a2 2 0 0 1 2.456 0l7 5.444A2 2 0 0 1 21 8.98V19a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-6h-3zM9 13a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 13v6a.5.5 0 0 0 .5.5H19a.5.5 0 0 0 .5-.5V8.978a.5.5 0 0 0-.193-.395l-7-5.444a.5.5 0 0 0-.614 0l-7 5.444a.5.5 0 0 0-.193.395V19a.5.5 0 0 0 .5.5h3.5A.5.5 0 0 0 9 19z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconHome;
