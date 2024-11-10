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
const IconCouch = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M20 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2v1.25a.75.75 0 0 0 1.5 0V19h13v1.25a.75.75 0 0 0 1.5 0V19a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2m-2-2.5H6a.5.5 0 0 0-.5.5v2.063A2 2 0 0 1 7 10v3.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V10a2 2 0 0 1 1.5-1.937V6a.5.5 0 0 0-.5-.5m2 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V10a.5.5 0 0 1 .5-.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconCouch;
