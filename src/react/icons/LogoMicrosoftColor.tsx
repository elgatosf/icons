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
const IconLogoMicrosoftColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					fill="none"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path fill="#F35325" d="M3 3h8.6v8.6H3z" />
					<path fill="#05A6F0" d="M3 12.4h8.6V21H3z" />
					<path fill="#FFBA08" d="M12.4 12.4H21V21h-8.6z" />
					<path fill="#81BC06" d="M12.4 3H21v8.6h-8.6z" />
				</svg>
			);
	}
};
export default IconLogoMicrosoftColor;
