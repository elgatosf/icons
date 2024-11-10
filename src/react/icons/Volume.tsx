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
const IconVolume = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M18.778 4.222a.75.75 0 0 0-1.06 1.06 9.5 9.5 0 0 1 0 13.436.75.75 0 1 0 1.06 1.06 11 11 0 0 0 0-15.556" />
					<path
						fillRule="evenodd"
						d="M9.293 19.293 6 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2l3.293-3.293c.63-.63 1.707-.184 1.707.707v13.172c0 .89-1.077 1.337-1.707.707M7.06 14.939A1.5 1.5 0 0 0 6 14.5H4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 0 1.06-.44L9.5 6.622V17.38z"
						clipRule="evenodd"
					/>
					<path d="M13.828 9.172a.75.75 0 1 0-1.06 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 0 0 1.06 1.06 4 4 0 0 0 0-5.656" />
					<path d="M15.243 6.697a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06" />
				</svg>
			);
	}
};
export default IconVolume;
