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
const IconVolumeMixerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12.425 7a3.751 3.751 0 0 0-7.35 0H2.75a.75.75 0 0 0 0 1.5h2.325a3.751 3.751 0 0 0 7.35 0h8.825a.75.75 0 0 0 0-1.5zM2.75 15.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM18 11.75a.75.75 0 0 0-1.28-.53l-2.28 2.28h-.94A1.5 1.5 0 0 0 12 15v2.5a1.5 1.5 0 0 0 1.5 1.5h.94l2.28 2.28a.75.75 0 0 0 1.28-.53zm1.255.434a.75.75 0 0 1 1.06 0 5.75 5.75 0 0 1 0 8.132.75.75 0 0 1-1.06-1.06 4.25 4.25 0 0 0 0-6.011.75.75 0 0 1 0-1.06Z" />
				</svg>
			);
	}
};
export default IconVolumeMixerFilled;
