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
const IconWebcamFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
					<path
						fillRule="evenodd"
						d="M15.6 19.251a9 9 0 1 0-7.2 0 9 9 0 0 0-2.764 1.885.75.75 0 0 0 1.06 1.06 7.5 7.5 0 0 1 10.607 0 .75.75 0 0 0 1.061-1.06 9 9 0 0 0-2.764-1.885M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconWebcamFilled;
