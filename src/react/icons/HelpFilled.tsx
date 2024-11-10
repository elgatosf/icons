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
const IconHelpFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-.34-14.5c-.95 0-1.79.624-2.062 1.535l-.13.43a.75.75 0 1 1-1.436-.43l.129-.431A3.65 3.65 0 0 1 11.66 6h.395a3.556 3.556 0 0 1 2.015 6.487l-.825.566c-.31.214-.496.567-.496.943v.254a.75.75 0 0 1-1.5 0v-.254c0-.87.429-1.685 1.146-2.179l.825-.566A2.056 2.056 0 0 0 12.056 7.5zM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconHelpFilled;
