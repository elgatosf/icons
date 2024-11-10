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
const IconTextLineSpacingSet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.72 5.78a.75.75 0 0 0 1.06-1.06L6.53 2.47a.75.75 0 0 0-1.06 0L3.22 4.72a.75.75 0 0 0 1.06 1.06l.97-.97v14.38l-.97-.97a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l2.25-2.25a.75.75 0 1 0-1.06-1.06l-.97.97V4.81zM21 3.75a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 .75-.75m-3 5.5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 .75-.75" />
					<path
						fillRule="evenodd"
						d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M19.5 15a.5.5 0 0 1 .5.5v2.828a.5.5 0 0 1-1 0v-1.621l-3.146 3.147a.5.5 0 1 1-.708-.707L18.293 16h-1.621a.5.5 0 1 1 0-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconTextLineSpacingSet;
