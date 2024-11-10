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
const IconBadge = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="m19.25 7.525-7-4.041a.5.5 0 0 0-.5 0l-7 4.041a.5.5 0 0 0-.25.433v8.083a.5.5 0 0 0 .25.433l7 4.042a.5.5 0 0 0 .5 0l7-4.042a.5.5 0 0 0 .25-.433V7.958a.5.5 0 0 0-.25-.433M13 2.185a2 2 0 0 0-2 0L4 6.226a2 2 0 0 0-1 1.732v8.083a2 2 0 0 0 1 1.732l7 4.042a2 2 0 0 0 2 0l7-4.042a2 2 0 0 0 1-1.732V7.958a2 2 0 0 0-1-1.732z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="m13.061 10.54-1.06-2.15-1.062 2.15-2.373.344 1.717 1.674-.405 2.363L12 13.805l2.122 1.116-.405-2.363 1.717-1.674zM9.943 9.167l-2.595.377a1 1 0 0 0-.554 1.706l1.877 1.83-.443 2.585A1 1 0 0 0 9.68 16.72L12 15.5l2.321 1.22a1 1 0 0 0 1.451-1.054l-.443-2.585 1.877-1.83a1 1 0 0 0-.554-1.706l-2.595-.377-1.16-2.351a1 1 0 0 0-1.794 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconBadge;
