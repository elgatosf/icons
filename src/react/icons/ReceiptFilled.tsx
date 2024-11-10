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
const IconReceiptFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17.25a.75.75 0 0 1-1.29.521l-1.877-1.942-1.877 1.942a.75.75 0 0 1-1.079 0L12 19.83l-1.877 1.942a.75.75 0 0 1-1.079 0L7.167 19.83l-1.878 1.942A.75.75 0 0 1 4 21.25zm3.75 2a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM7 9.75A.75.75 0 0 1 7.75 9h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 7 9.75M7.75 12a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm5.75-2.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconReceiptFilled;
