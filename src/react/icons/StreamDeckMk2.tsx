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
const IconStreamDeckMk2 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.739 6.967a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.131 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.13 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.13 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.131 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8.87 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.13 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.131 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5.739 15.033a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.119 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.118 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.119 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.166 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5.739 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
					<path
						fillRule="evenodd"
						d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-.5h16a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconStreamDeckMk2;
