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
const IconImage = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M18 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m16-.5H5a.5.5 0 0 0-.5.5v9.44l3.97-3.97a.75.75 0 0 1 1.06 0L14 14.94l2.47-2.47a.75.75 0 0 1 1.06 0l1.97 1.97V5a.5.5 0 0 0-.5-.5M9 12.06l-4.5 4.5V19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-2.44l-2.5-2.5-2.47 2.47a.75.75 0 0 1-1.06 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconImage;
