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
const IconThumbDownFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M16 4H8.055a4 4 0 0 0-3.859 2.948L2.69 12.474A2 2 0 0 0 4.619 15H10v3.695a2.305 2.305 0 0 0 4.505.687L16 14.6zm1.5 0v9H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
				</svg>
			);
	}
};
export default IconThumbDownFilled;
