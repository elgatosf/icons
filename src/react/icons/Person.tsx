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
const IconPerson = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0m-1.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M14 14h-4a6 6 0 0 0-6 6 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 6 6 0 0 0-6-6m-8.5 6a4.5 4.5 0 0 1 4.5-4.5h4a4.5 4.5 0 0 1 4.5 4.5.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconPerson;
