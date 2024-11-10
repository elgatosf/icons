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
const IconTimeHistory = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M15.536 5.386a7.5 7.5 0 0 0-11.013 6.03L5.72 10.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.236 1.236a9 9 0 1 1 2.62 6.908.75.75 0 0 1 1.06-1.06 7.5 7.5 0 1 0 8.84-11.918" />
					<path d="M12 6a.75.75 0 0 1 .75.75v4.94l2.03 2.03a.75.75 0 1 1-1.06 1.06l-2.25-2.25a.75.75 0 0 1-.22-.53V6.75A.75.75 0 0 1 12 6" />
				</svg>
			);
	}
};
export default IconTimeHistory;
