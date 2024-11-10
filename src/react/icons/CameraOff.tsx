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
const IconCameraOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06L19.06 6H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4.06l-.78.78a.75.75 0 0 1-1.06 0m3.34-2.28H20a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-2.44l-1.994 1.995a5 5 0 0 1-7.07 7.07zm3.996-3.995a3.5 3.5 0 0 0 4.95-4.95z"
						clipRule="evenodd"
					/>
					<path d="m2 18.82 1.5-1.5V8a.5.5 0 0 1 .5-.5h3a1.5 1.5 0 0 0 1.248-.668L9.803 4.5h4.394l.85 1.274 1.081-1.081-.831-1.248A1 1 0 0 0 14.465 3h-4.93a1 1 0 0 0-.832.445L7 6H4a2 2 0 0 0-2 2z" />
					<path d="m7.058 13.763 1.525-1.525a3.5 3.5 0 0 1 2.655-2.655l1.525-1.525a5 5 0 0 0-5.705 5.705" />
				</svg>
			);
	}
};
export default IconCameraOff;
