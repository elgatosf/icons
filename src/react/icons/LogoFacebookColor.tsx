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
const IconLogoFacebookColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fill="#0866FF"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.69 3.229 8.625 7.584 9.706v-6.65H7.522V12h2.062v-1.317c0-3.403 1.54-4.981 4.882-4.981.634 0 1.727.124 2.174.248v2.77a13 13 0 0 0-1.155-.037c-1.64 0-2.273.621-2.273 2.236V12h3.266l-.56 3.056h-2.706v6.87C18.164 21.33 22 17.114 22 12"
					/>
					<path
						fill="#fff"
						d="M15.916 15.056 16.477 12h-3.266v-1.08c0-1.615.634-2.237 2.273-2.237.51 0 .92.013 1.156.038V5.95c-.448-.125-1.54-.249-2.174-.249-3.342 0-4.883 1.578-4.883 4.981V12H7.521v3.056h2.062v6.65a10 10 0 0 0 3.628.22v-6.87z"
					/>
				</svg>
			);
	}
};
export default IconLogoFacebookColor;
