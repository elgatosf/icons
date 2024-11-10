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
const IconCameraFramePresetSetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2.75 2a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V3.5h1.75a.75.75 0 0 0 0-1.5zM2 18.75v2.5a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 0-1.5H3.5v-1.75a.75.75 0 0 0-1.5 0m20-13.5v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0M15 6.5h2a.5.5 0 0 1 .5.5v4q.776.002 1.5.174V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4.174A6.5 6.5 0 0 1 11 17.5H7a.5.5 0 0 1-.5-.5v-2h4.998A6.52 6.52 0 0 1 15 11.498z" />
					<path
						fillRule="evenodd"
						d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.5-7.5a.5.5 0 0 0-.5-.5h-2.828a.5.5 0 0 0 0 1h1.621l-3.147 3.146a.5.5 0 1 0 .707.708L19 16.707v1.621a.5.5 0 1 0 1 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconCameraFramePresetSetFilled;
