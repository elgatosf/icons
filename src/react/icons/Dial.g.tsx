import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDial = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-1.5 0A8.5 8.5 0 1 1 5.483 6.543l5.237 5.237a.75.75 0 1 0 1.06-1.06L6.543 5.483A8.5 8.5 0 0 1 20.5 12"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a5.98 5.98 0 0 0-3.874 1.419l3.728 3.727.064.079a.5.5 0 0 1-.693.693l-.079-.064L3.42 4.126A6 6 0 1 0 8 2"
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
						d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-1 0A7 7 0 1 1 4.71 5.416l4.436 4.438a.5.5 0 0 0 .708-.708L5.416 4.71A7 7 0 0 1 17 10"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconDial.iconName = "dial";

export default IconDial;
