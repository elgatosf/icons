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
const IconPlayPause = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12.856 13.732c1.334-.77 1.334-2.694 0-3.464L5 5.732c-1.333-.77-3 .192-3 1.732v9.072c0 1.54 1.667 2.502 3 1.732zM4.25 16.969l7.856-4.536a.5.5 0 0 0 0-.866L4.25 7.03a.5.5 0 0 0-.75.433v9.072a.5.5 0 0 0 .75.433Z"
						clipRule="evenodd"
					/>
					<path d="M17.25 5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V6.25a.75.75 0 0 1 .75-.75m4.75.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 1 0 1.5 0z" />
				</svg>
			);
	}
};
export default IconPlayPause;
