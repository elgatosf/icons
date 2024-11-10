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
const IconLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.498 12c0-3.037 2.464-5.5 5.502-5.5h.25a.75.75 0 0 0 0-1.5H9a7 7 0 0 0-7.002 7c0 3.866 3.136 7 7.002 7h.25a.75.75 0 0 0 0-1.5H9A5.5 5.5 0 0 1 3.498 12M14.75 5a.75.75 0 0 0 0 1.5H15a5.5 5.5 0 0 1 5.502 5.5c0 3.037-2.464 5.5-5.502 5.5h-.25a.75.75 0 0 0 0 1.5H15a7 7 0 0 0 7.002-7c0-3.866-3.136-7-7.002-7z" />
					<path d="M8.75 11.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" />
				</svg>
			);
	}
};
export default IconLink;
