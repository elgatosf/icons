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
const IconTransition = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3 5a2 2 0 0 1 2-2h1.75a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h1.75a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2zm8-.5h8a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5M19 3h-8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconTransition;
