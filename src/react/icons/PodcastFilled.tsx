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
const IconPodcastFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.833 4.764a7.5 7.5 0 0 1 9.47 11.54.75.75 0 0 0 1.061 1.06 9.001 9.001 0 1 0-12.728 0 .75.75 0 1 0 1.06-1.06 7.5 7.5 0 0 1 1.137-11.54" />
					<path d="M9.5 7.258a4.5 4.5 0 0 1 5.682 6.924.75.75 0 1 0 1.06 1.06 6 6 0 1 0-8.485 0 .75.75 0 0 0 1.061-1.06A4.5 4.5 0 0 1 9.5 7.258" />
					<path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4a3 3 0 0 0-3 3v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a3 3 0 0 0-3-3" />
				</svg>
			);
	}
};
export default IconPodcastFilled;
