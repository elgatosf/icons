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
const IconPanelExpandFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5 3h3.5v18H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" />
					<path
						fillRule="evenodd"
						d="M19 21h-9V3h9a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M13.47 8.22a.75.75 0 0 0 0 1.06L16.19 12l-2.72 2.72a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25a.75.75 0 0 0-1.06 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconPanelExpandFilled;
