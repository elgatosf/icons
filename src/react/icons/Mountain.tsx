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
const IconMountain = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2.57 17.75a.5.5 0 0 0 .433.75h17.994a.5.5 0 0 0 .433-.75l-5.196-9a.5.5 0 0 0-.866 0l-3.392 5.875a.75.75 0 1 1-1.3-.75L14.07 8c.77-1.333 2.694-1.333 3.464 0l5.196 9c.77 1.333-.192 3-1.732 3H3.003c-1.54 0-2.502-1.667-1.732-3L8.199 5c.77-1.333 2.694-1.333 3.464 0l.98 1.697c.139.24.13.537-.011.775a.733.733 0 0 1-1.27.005l-.998-1.727a.5.5 0 0 0-.866 0z" />
				</svg>
			);
	}
};
export default IconMountain;
