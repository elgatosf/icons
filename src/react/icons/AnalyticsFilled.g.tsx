import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAnalyticsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.5 5C9.5 3.89543 10.3954 3 11.5 3H12.5C13.6046 3 14.5 3.89543 14.5 5V19C14.5 20.1046 13.6046 21 12.5 21H11.5C10.3954 21 9.5 20.1046 9.5 19V5Z" />
					<path d="M3 13C3 11.8954 3.89543 11 5 11H6C7.10457 11 8 11.8954 8 13V19C8 20.1046 7.10457 21 6 21H5C3.89543 21 3 20.1046 3 19V13Z" />
					<path d="M18 7C16.8954 7 16 7.89543 16 9V19C16 20.1046 16.8954 21 18 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7H18Z" />
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
					<path d="M8 4.5C8 3.67157 8.67157 3 9.5 3H10.5C11.3284 3 12 3.67157 12 4.5V15.5C12 16.3284 11.3284 17 10.5 17H9.5C8.67157 17 8 16.3284 8 15.5V4.5Z" />
					<path d="M3 10.5C3 9.67157 3.67157 9 4.5 9H5.5C6.32843 9 7 9.67157 7 10.5V15.5C7 16.3284 6.32843 17 5.5 17H4.5C3.67157 17 3 16.3284 3 15.5V10.5Z" />
					<path d="M14.5 6C13.6716 6 13 6.67157 13 7.5V15.5C13 16.3284 13.6716 17 14.5 17H15.5C16.3284 17 17 16.3284 17 15.5V7.5C17 6.67157 16.3284 6 15.5 6H14.5Z" />
				</svg>
			);
	}
};

IconAnalyticsFilled.iconName = "analytics--filled";

export default IconAnalyticsFilled;
