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
const IconPhotoGrid = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm9 1.5h-4v4h4zm0 5.5h-4v4h4zM8.5 8.5v-4H5a.5.5 0 0 0-.5.5v3.5zm-4 1.5h4v4h-4zm11 0h4v4h-4zm4-1.5h-4v-4H19a.5.5 0 0 1 .5.5zm-11 7h-4V19a.5.5 0 0 0 .5.5h3.5zm5.5 0h-4v4h4zm1.5 4v-4h4V19a.5.5 0 0 1-.5.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconPhotoGrid;
