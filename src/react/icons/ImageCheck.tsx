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
const IconImageCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 5v14a2 2 0 0 0 2 2h7.022a6.5 6.5 0 0 1-.709-1.5H5a.5.5 0 0 1-.5-.5v-2.44l4.5-4.5 2.635 2.635c.223-.466.5-.901.823-1.298L9.53 10.47a.75.75 0 0 0-1.06 0L4.5 14.44V5a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v6.313a6.5 6.5 0 0 1 1.5.709V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2" />
					<path
						fillRule="evenodd"
						d="M18 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1 14.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconImageCheck;
