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
const IconLogoTumblr = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M17.333 22H14c-2.992 0-5.25-1.55-5.25-5.25v-5.933H6V7.6A5.975 5.975 0 0 0 10.417 2h3.133v5.1h3.633v3.717H13.55v5.166c0 1.55.783 2.075 2.017 2.075h1.766z" />
				</svg>
			);
	}
};
export default IconLogoTumblr;
