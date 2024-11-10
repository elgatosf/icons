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
const IconLogoObs = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M14.378 10.258a4 4 0 0 0 1.054-1.199l.172.011a4.9 4.9 0 0 1 1.933.57 4.95 4.95 0 0 1 1.51 1.259 4.9 4.9 0 0 1 1.041 2.436 4.04 4.04 0 0 0-2.28-2.68 4 4 0 0 0-1.64-.337 4.01 4.01 0 0 0-3.917 3.27 4.05 4.05 0 0 0 .187 2.161 4 4 0 0 0 .234.51q0 .01-.01.023a4.9 4.9 0 0 1-4.775 2.261 4.9 4.9 0 0 1-1.382-.382 4 4 0 0 0 .764.163 4.03 4.03 0 0 0 3.503-1.375 4 4 0 0 0 .917-3.263 4.02 4.02 0 0 0-4.032-3.367h-.003q-.009.002-.015-.006l-.01-.019-.015-.03A4.92 4.92 0 0 1 9.777 3.68a4 4 0 0 0-1.196 1.19 4 4 0 0 0-.342.65 3.9 3.9 0 0 0-.27 1.005 4.01 4.01 0 0 0 1.879 3.952 4.01 4.01 0 0 0 4.53-.22Z" />
					<path
						fillRule="evenodd"
						d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m-8.994 9.912a8.945 8.945 0 1 0 17.89 0 8.945 8.945 0 0 0-17.89 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};
export default IconLogoObs;
