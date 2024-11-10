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
const IconLogoSpotifyColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						fill="#1ED760"
						d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m4.586 14.423a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.624.624 0 0 1-.277-1.216c3.809-.87 7.076-.495 9.712 1.116.294.18.387.563.207.857M17.81 13.7a.78.78 0 0 1-1.072.257c-2.688-1.653-6.786-2.131-9.965-1.166A.78.78 0 0 1 6.32 11.3c3.631-1.102 8.146-.568 11.233 1.329a.78.78 0 0 1 .257 1.072m.105-2.836c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 1 1-.543-1.79c3.533-1.072 9.405-.865 13.116 1.338a.934.934 0 1 1-.955 1.608"
					/>
				</svg>
			);
	}
};
export default IconLogoSpotifyColor;
