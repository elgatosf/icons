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
const IconEffect = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.825 8.092A3.25 3.25 0 0 1 11.007 5.5h1.243a.75.75 0 0 0 0-1.5h-1.243a4.75 4.75 0 0 0-4.651 3.788L6.105 9H3.75a.75.75 0 0 0 0 1.5h2.044l-1.778 8.598a.75.75 0 1 0 1.468.304L7.326 10.5h5.01l2.415 3.823-4.288 4.404a.75.75 0 0 0 1.074 1.046l4.038-4.146 2.54 4.024a.75.75 0 1 0 1.269-.802l-2.733-4.327 4.136-4.249a.75.75 0 0 0-1.074-1.046l-3.886 3.99-2.443-3.867A.75.75 0 0 0 12.75 9H7.637z" />
				</svg>
			);
	}
};
export default IconEffect;
