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
const IconTemperatureCoolFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5 5.5a2.5 2.5 0 0 1 5 0v7.258a4.5 4.5 0 1 1-5 0zm1.5 8.059-.666.445A3 3 0 0 0 4.541 16h5.918a3 3 0 0 0-1.293-1.996L8.5 13.56V5.5a1 1 0 0 0-2 0z"
						clipRule="evenodd"
					/>
					<path d="M15.75 6.19V3.75a.75.75 0 0 0-1.5 0v5.5h-1.5a.75.75 0 0 0 0 1.5h1.5v5.5a.75.75 0 0 0 1.5 0v-2.44l1.72 1.72a.75.75 0 1 0 1.06-1.06l-2.78-2.78v-.94h.94l2.78 2.78a.75.75 0 1 0 1.06-1.06l-1.72-1.72h2.44a.75.75 0 0 0 0-1.5h-2.44l1.72-1.72a.75.75 0 0 0-1.06-1.06l-2.78 2.78h-.94v-.94l2.78-2.78a.75.75 0 0 0-1.06-1.06z" />
				</svg>
			);
	}
};
export default IconTemperatureCoolFilled;
