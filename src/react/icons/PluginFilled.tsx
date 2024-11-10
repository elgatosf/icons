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
const IconPluginFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5 5a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1 2 2 0 1 1 0 4 1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1 2 2 0 1 1 4 0 1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-3a1 1 0 0 1 1-1 2 2 0 1 0 0-4 1 1 0 0 1-1-1V7a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1 2 2 0 1 0-4 0 1 1 0 0 1-1 1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconPluginFilled;
