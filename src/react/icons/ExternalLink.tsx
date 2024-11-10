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
const IconExternalLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 5a.5.5 0 0 1 .5-.5h3.25a.75.75 0 0 0 0-1.5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.25a.75.75 0 0 0-1.5 0V19a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5z" />
					<path d="M12.75 3a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 1 0 1.06 1.06l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75z" />
				</svg>
			);
	}
};
export default IconExternalLink;
