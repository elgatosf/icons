import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPaletteFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10h1a2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2 5 5 0 0 0 5-5c0-5.523-4.477-10-10-10m5.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-2.433-7.312a1.5 1.5 0 1 1-1.5 2.598 1.5 1.5 0 0 1 1.5-2.598m-4.951 1.049a1.5 1.5 0 1 0-2.598 1.5 1.5 1.5 0 0 0 2.598-1.5M5 12.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m3.384 3.763a1.5 1.5 0 1 0 2.598 1.5 1.5 1.5 0 0 0-2.598-1.5"
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
						d="M10 2a8 8 0 1 0 0 16 2 2 0 0 0 2-2 2 2 0 0 1 2-2 4 4 0 0 0 4-4 8 8 0 0 0-8-8m2 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconPaletteFilled.iconName = "palette--filled";

export default IconPaletteFilled;
