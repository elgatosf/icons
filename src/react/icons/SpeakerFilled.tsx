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
const IconSpeakerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
					<path
						fillRule="evenodd"
						d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m4 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconSpeakerFilled;
