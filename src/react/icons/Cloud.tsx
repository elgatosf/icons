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
const IconCloud = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="m17.04 11.344-.044-1.055a5 5 0 0 0-9.992 0l-.043 1.055-1.008.315A3.502 3.502 0 0 0 7 18.5h10a3.5 3.5 0 0 0 1.047-6.841zM5.505 10.227A5.002 5.002 0 0 0 7 20h10a5 5 0 0 0 1.494-9.773 6.5 6.5 0 0 0-12.988 0Z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconCloud;
