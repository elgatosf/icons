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
const IconRocketFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M20.712 2c-4.476 0-8.72 1.988-11.586 5.427L8.65 8H4.382a1.5 1.5 0 0 0-1.213.618l-1.235 1.697a1.5 1.5 0 0 0 .592 2.248l3.939 1.79 3.194-3.194a2.25 2.25 0 1 1 3.182 3.182l-3.194 3.194 1.79 3.938a1.5 1.5 0 0 0 2.248.593l1.697-1.235A1.5 1.5 0 0 0 16 19.618v-4.267l.573-.478A15.08 15.08 0 0 0 22 3.287C22 2.577 21.424 2 20.712 2" />
					<path d="M11.78 13.28a.75.75 0 1 0-1.06-1.06l-5.5 5.5a.75.75 0 1 0 1.06 1.06z" />
				</svg>
			);
	}
};
export default IconRocketFilled;
