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
const IconKeyboardFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M1 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm7.75 6.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 13.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m5.75-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M5.375 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m5.75-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3.25 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m5.5-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M5 15.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconKeyboardFilled;
