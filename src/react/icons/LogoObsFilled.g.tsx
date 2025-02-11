import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoObsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m-7.622-1.742a4 4 0 0 0 1.054-1.199l.172.011a4.9 4.9 0 0 1 1.933.57 4.95 4.95 0 0 1 1.51 1.259 4.9 4.9 0 0 1 1.041 2.436 4.038 4.038 0 0 0-2.28-2.68 4 4 0 0 0-1.64-.337 4.01 4.01 0 0 0-3.917 3.27 4.05 4.05 0 0 0 .187 2.161 4 4 0 0 0 .234.51q0 .01-.01.023l-.005.007-.042.064a5 5 0 0 1-1.203 1.27 4.9 4.9 0 0 1-3.526.92 4.9 4.9 0 0 1-1.38-.382 4 4 0 0 0 .763.163 4.03 4.03 0 0 0 3.503-1.375 4 4 0 0 0 .917-3.263 4.02 4.02 0 0 0-4.032-3.367h-.003q-.009.002-.015-.006l-.01-.019-.015-.03-.034-.07A4.92 4.92 0 0 1 9.777 3.68 4.011 4.011 0 0 0 8.581 4.87a4 4 0 0 0-.342.65 3.9 3.9 0 0 0-.27 1.005 4.006 4.006 0 0 0 1.879 3.952 4.01 4.01 0 0 0 4.53-.22"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m2.746-10.352a3.21 3.21 0 0 1-5.19.526 3.205 3.205 0 0 1-.128-4.104 3 3 0 0 1 .418-.442 3 3 0 0 1 .376-.284 3.94 3.94 0 0 0-1.73 5.267l.012.024.008.015q.005.006.011.005h.003a3 3 0 0 1 .355.013 3.216 3.216 0 0 1 2.88 3.65 3.2 3.2 0 0 1-.743 1.642q-.347.401-.802.673a3.22 3.22 0 0 1-2.612.296 3.9 3.9 0 0 0 2.175.293 3.9 3.9 0 0 0 1.751-.723 4 4 0 0 0 .996-1.068l.003-.005q.009-.01.01-.02a3.05 3.05 0 0 1-.187-.407 3.2 3.2 0 0 1-.15-1.73 3.208 3.208 0 0 1 5.192-1.888 3 3 0 0 1 .49.5 3 3 0 0 1 .296.45 3.2 3.2 0 0 1 .29.737 3.93 3.93 0 0 0-.832-1.95 4 4 0 0 0-1.208-1.006 3.9 3.9 0 0 0-1.684-.464"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoObsFilled.iconName = "logo-obs--filled";

export default IconLogoObsFilled;
