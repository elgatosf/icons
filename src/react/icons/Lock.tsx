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
const IconLock = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12.75 15.8a1.5 1.5 0 1 0-1.5 0v1.45a.75.75 0 0 0 1.5 0z" />
					<path
						fillRule="evenodd"
						d="M12 1.25A4.75 4.75 0 0 0 7.25 6v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1.25V6A4.75 4.75 0 0 0 12 1.25M15.25 9V6a3.25 3.25 0 0 0-6.5 0v3zM5.5 11a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLock;
