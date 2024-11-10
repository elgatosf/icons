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
const IconWifi3 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8.938 10.109a8 8 0 0 1 8.719 1.734.75.75 0 0 0 1.06-1.06 9.5 9.5 0 0 0-13.435 0 .75.75 0 1 0 1.06 1.06 8 8 0 0 1 2.596-1.734" />
					<path d="M12 13.5a4 4 0 0 0-2.829 1.172.75.75 0 1 1-1.06-1.061 5.5 5.5 0 0 1 7.778 0 .75.75 0 0 1-1.06 1.06 4 4 0 0 0-2.83-1.171Zm1.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
				</svg>
			);
	}
};
export default IconWifi3;
