import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPauseFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6 3C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H8C9.10457 21 10 20.1046 10 19V5C10 3.89543 9.10457 3 8 3H6Z" />
					<path d="M16 3C14.8954 3 14 3.89543 14 5V19C14 20.1046 14.8954 21 16 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3H16Z" />
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
					<path d="M5.5 3C4.67157 3 4 3.67157 4 4.5V15.5C4 16.3284 4.67157 17 5.5 17H6.5C7.32843 17 8 16.3284 8 15.5V4.5C8 3.67157 7.32843 3 6.5 3H5.5Z" />
					<path d="M13.5 3C12.6716 3 12 3.67157 12 4.5V15.5C12 16.3284 12.6716 17 13.5 17H14.5C15.3284 17 16 16.3284 16 15.5V4.5C16 3.67157 15.3284 3 14.5 3H13.5Z" />
				</svg>
			);
	}
};

IconPauseFilled.iconName = "pause--filled";

export default IconPauseFilled;
