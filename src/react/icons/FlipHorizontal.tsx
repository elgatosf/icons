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
const IconFlipHorizontal = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 2.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75" />
					<path
						fillRule="evenodd"
						d="M3.463 17.943A.75.75 0 0 1 3 17.25V6.75a.75.75 0 0 1 1.28-.53l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-.817.163M4.5 15.439 7.94 12 4.5 8.56v6.88Z"
						clipRule="evenodd"
					/>
					<path d="M11.25 7.5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0zm1.5 9a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 1.5 0zM12 21.25a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75" />
					<path
						fillRule="evenodd"
						d="M20.537 17.943A.75.75 0 0 0 21 17.25V6.75a.75.75 0 0 0-1.28-.53l-5.25 5.25a.75.75 0 0 0 0 1.06l5.25 5.25a.75.75 0 0 0 .817.163M19.5 15.439 16.06 12l3.44-3.44v6.88Z"
						clipRule="evenodd"
					/>
					<path d="M12 10.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75" />
				</svg>
			);
	}
};
export default IconFlipHorizontal;
