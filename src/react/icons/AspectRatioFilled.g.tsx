import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAspectRatioFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H18V10C18 8.89543 17.1046 8 16 8H2V6Z" />
					<path d="M14 20H16.5V10C16.5 9.72386 16.2761 9.5 16 9.5H14V20Z" />
					<path d="M12.5 9.5H2V18C2 19.1046 2.89543 20 4 20H12.5V9.5Z" />
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M4 4C2.89543 4 2 4.89543 2 6V7H13C14.1046 7 15 7.89543 15 9V16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H4Z" />
					<path d="M14 16V9C14 8.44772 13.5523 8 13 8H11V16H14Z" />
					<path d="M10 16V8H2V14C2 15.1046 2.89543 16 4 16H10Z" />
				</svg>
			);
	}
};

IconAspectRatioFilled.iconName = "aspect-ratio--filled";

export default IconAspectRatioFilled;
