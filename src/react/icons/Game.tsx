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
const IconGame = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8.75 8.5a.75.75 0 1 0-1.5 0v.75H6.5a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75zm7.25 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
					<path
						fillRule="evenodd"
						d="M17.137 17.849 15 15H9l-2.136 2.849a2.879 2.879 0 0 1-5.118-2.33L3.661 6.58A2 2 0 0 1 5.617 5h12.766a2 2 0 0 1 1.956 1.58l1.915 8.938a2.879 2.879 0 0 1-5.117 2.33ZM8.25 13.5l-2.586 3.449a1.379 1.379 0 0 1-2.451-1.116l1.915-8.938a.5.5 0 0 1 .489-.395h12.766a.5.5 0 0 1 .49.395l1.914 8.938a1.379 1.379 0 0 1-2.45 1.116L15.75 13.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconGame;
