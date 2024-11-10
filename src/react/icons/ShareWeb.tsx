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
const IconShareWeb = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M20 6a3 3 0 0 1-5.332 1.887l-5.824 3.155a3 3 0 0 1 0 1.916l5.824 3.155a3 3 0 1 1-.623 1.368L8.02 14.218a3 3 0 1 1 0-4.436l6.025-3.263A3 3 0 1 1 20 6m-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-11-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconShareWeb;
