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
const IconBrightnessIncrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12.75 2.75a.75.75 0 0 0-1.5 0V5a.75.75 0 0 0 1.5 0zm6.321 3.24a.75.75 0 0 0-1.06-1.061l-1.592 1.59a.75.75 0 1 0 1.061 1.062zm2.179 6.76a.75.75 0 0 0 0-1.5H19a.75.75 0 0 0 0 1.5zm-3.24 6.321a.75.75 0 0 0 1.061-1.06l-1.59-1.591a.75.75 0 1 0-1.062 1.06zm-6.76 2.179a.75.75 0 0 0 1.5 0V19a.75.75 0 0 0-1.5 0zm-6.321-3.24a.75.75 0 0 0 1.06 1.061l1.592-1.59a.75.75 0 1 0-1.061-1.062zM2.75 11.25a.75.75 0 0 0 0 1.5H5a.75.75 0 0 0 0-1.5zm3.24-6.321a.75.75 0 0 0-1.061 1.06l1.59 1.592A.75.75 0 0 0 7.582 6.52zM12 9.5a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1A.75.75 0 0 1 12 9.5" />
					<path
						fillRule="evenodd"
						d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-1.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconBrightnessIncrease;
