import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWidgetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 17C3 15.8954 3.89543 15 5 15H9C10.1046 15 11 15.8954 11 17V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V17Z" />
					<path d="M13 13C13 11.8954 13.8954 11 15 11H19C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V13Z" />
					<path d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V11C11 12.1046 10.1046 13 9 13H5C3.89543 13 3 12.1046 3 11V5Z" />
					<path d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V7C21 8.10457 20.1046 9 19 9H15C13.8954 9 13 8.10457 13 7V5Z" />
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
					<path d="M5 3C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H7C8.10457 11 9 10.1046 9 9V5C9 3.89543 8.10457 3 7 3H5Z" />
					<path d="M13 3C11.8954 3 11 3.89543 11 5C11 6.10457 11.8954 7 13 7H15C16.1046 7 17 6.10457 17 5C17 3.89543 16.1046 3 15 3H13Z" />
					<path d="M11 11C11 9.89543 11.8954 9 13 9H15C16.1046 9 17 9.89543 17 11V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V11Z" />
					<path d="M5 13C3.89543 13 3 13.8954 3 15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15C9 13.8954 8.10457 13 7 13H5Z" />
				</svg>
			);
	}
};

IconWidgetFilled.iconName = "widget--filled";

export default IconWidgetFilled;
