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
const IconStreamDeckPedalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M13.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
					<path
						fillRule="evenodd"
						d="M8.91 4h6.18l2.137 16H6.773zM15 12.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
						clipRule="evenodd"
					/>
					<path d="M20.003 4h-3.4l2.271 17H20a2 2 0 0 0 2-2V6c0-1.105-.893-2-1.997-2M7.396 4H3.994A1.995 1.995 0 0 0 2 6v13a2 2 0 0 0 2 2h1.126z" />
				</svg>
			);
	}
};
export default IconStreamDeckPedalFilled;
