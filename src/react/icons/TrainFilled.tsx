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
const IconTrainFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.75 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" />
					<path
						fillRule="evenodd"
						d="M8 2a4 4 0 0 0-4 4v11a2 2 0 0 0 2 2h1.092l-1.117 1.935a.75.75 0 0 0 1.3.75L8.824 19h6.35l1.55 2.685a.75.75 0 0 0 1.3-.75L16.906 19H18a2 2 0 0 0 2-2V6a4 4 0 0 0-4-4zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 3.5A2.5 2.5 0 0 0 5.5 6v5h13V6A2.5 2.5 0 0 0 16 3.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconTrainFilled;
