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
const IconThumbUpFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8 20h7.945a4 4 0 0 0 3.859-2.948l1.507-5.526A2 2 0 0 0 19.381 9H14V5.305a2.305 2.305 0 0 0-4.506-.687L8 9.4zm-1.5 0v-9H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2z" />
				</svg>
			);
	}
};
export default IconThumbUpFilled;
