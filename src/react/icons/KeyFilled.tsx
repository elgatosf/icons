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
const IconKeyFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M8 9.5a6.5 6.5 0 1 1 4.595 6.216L11.53 16.78A.75.75 0 0 1 11 17H9.75v1.25A.75.75 0 0 1 9 19H7.75v1.25A.75.75 0 0 1 7 21H5a2 2 0 0 1-2-2v-1.482a2 2 0 0 1 .586-1.415l4.698-4.698A6.5 6.5 0 0 1 8 9.5M14.5 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconKeyFilled;
