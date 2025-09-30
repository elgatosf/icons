import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPlugin = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5.5 8V10C5.5 10.2761 5.72386 10.5 6 10.5H6.5C8.15685 10.5 9.5 11.8431 9.5 13.5C9.5 15.1569 8.15685 16.5 6.5 16.5H6C5.72386 16.5 5.5 16.7239 5.5 17V19C5.5 19.2761 5.72386 19.5 6 19.5H18C18.2761 19.5 18.5 19.2761 18.5 19V8C18.5 7.72386 18.2761 7.5 18 7.5H15.5C14.3954 7.5 13.5 6.60457 13.5 5.5V5C13.5 4.17157 12.8284 3.5 12 3.5C11.1716 3.5 10.5 4.17157 10.5 5V5.5C10.5 6.60457 9.60457 7.5 8.5 7.5H6C5.72386 7.5 5.5 7.72386 5.5 8ZM6 6C4.89543 6 4 6.89543 4 8V10C4 11.1046 4.89543 12 6 12H6.5C7.32843 12 8 12.6716 8 13.5C8 14.3284 7.32843 15 6.5 15H6C4.89543 15 4 15.8954 4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V8C20 6.89543 19.1046 6 18 6H15.5C15.2239 6 15 5.77614 15 5.5V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V5.5C9 5.77614 8.77614 6 8.5 6H6Z"
					/>
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10 3C9.44772 3 9 3.44772 9 4C9 5.10457 8.10457 6 7 6H6C5.44772 6 5 6.44772 5 7V8C5 8.55228 5.44772 9 6 9C7.10457 9 8 9.89543 8 11C8 12.1046 7.10457 13 6 13C5.44772 13 5 13.4477 5 14V15C5 15.5523 5.44772 16 6 16H14C14.5523 16 15 15.5523 15 15V7C15 6.44772 14.5523 6 14 6H13C11.8954 6 11 5.10457 11 4C11 3.44772 10.5523 3 10 3ZM8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 4.55228 12.4477 5 13 5H14C15.1046 5 16 5.89543 16 7V15C16 16.1046 15.1046 17 14 17H6C4.89543 17 4 16.1046 4 15V14C4 12.8954 4.89543 12 6 12C6.55228 12 7 11.5523 7 11C7 10.4477 6.55228 10 6 10C4.89543 10 4 9.10457 4 8V7C4 5.89543 4.89543 5 6 5H7C7.55228 5 8 4.55228 8 4Z"
					/>
				</svg>
			);
	}
};

IconPlugin.iconName = "plugin";

export default IconPlugin;
