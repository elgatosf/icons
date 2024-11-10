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
const IconPhotoGridFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8 14.5v-5H3v5zM3 16v3a2 2 0 0 0 2 2h3v-5zm6.5 5h5v-5h-5zm6.5 0h3a2 2 0 0 0 2-2v-3h-5zm5-6.5v-5h-5v5zM21 8V5a2 2 0 0 0-2-2h-3v5zm-6.5-5h-5v5h5zM8 3H5a2 2 0 0 0-2 2v3h5zm1.5 11.5v-5h5v5z" />
				</svg>
			);
	}
};
export default IconPhotoGridFilled;
