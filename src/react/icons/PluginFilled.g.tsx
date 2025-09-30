import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPluginFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 8C4 6.89543 4.89543 6 6 6H8.5C8.77614 6 9 5.77614 9 5.5V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V5.5C15 5.77614 15.2239 6 15.5 6H18C19.1046 6 20 6.89543 20 8V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19L4 17.5C4 16.3954 4.89543 15.5 6 15.5H6.5C7.60457 15.5 8.5 14.6046 8.5 13.5C8.5 12.3954 7.60457 11.5 6.5 11.5H6C4.89543 11.5 4 10.6046 4 9.5L4 8Z" />
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
					<path d="M10 2C8.89543 2 8 2.89543 8 4C8 4.55228 7.55228 5 7 5H6C4.89543 5 4 5.89543 4 7V8C4 9.10457 4.89543 10 6 10C6.55228 10 7 10.4477 7 11C7 11.5523 6.55228 12 6 12C4.89543 12 4 12.8954 4 14V15C4 16.1046 4.89543 17 6 17H14C15.1046 17 16 16.1046 16 15V7C16 5.89543 15.1046 5 14 5H13C12.4477 5 12 4.55228 12 4C12 2.89543 11.1046 2 10 2Z" />
				</svg>
			);
	}
};

IconPluginFilled.iconName = "plugin--filled";

export default IconPluginFilled;
