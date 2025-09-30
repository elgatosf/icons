import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWidget = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M9 16.5H5C4.72386 16.5 4.5 16.7239 4.5 17V19C4.5 19.2761 4.72386 19.5 5 19.5H9C9.27614 19.5 9.5 19.2761 9.5 19V17C9.5 16.7239 9.27614 16.5 9 16.5ZM19 12.5H15C14.7239 12.5 14.5 12.7239 14.5 13V19C14.5 19.2761 14.7239 19.5 15 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V13C19.5 12.7239 19.2761 12.5 19 12.5ZM9 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V11C4.5 11.2761 4.72386 11.5 5 11.5H9C9.27614 11.5 9.5 11.2761 9.5 11V5C9.5 4.72386 9.27614 4.5 9 4.5ZM19 4.5H15C14.7239 4.5 14.5 4.72386 14.5 5V7C14.5 7.27614 14.7239 7.5 15 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7V5C19.5 4.72386 19.2761 4.5 19 4.5ZM3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V11C11 12.1046 10.1046 13 9 13H5C3.89543 13 3 12.1046 3 11V5ZM15 11C13.8954 11 13 11.8954 13 13V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V13C21 11.8954 20.1046 11 19 11H15ZM5 15C3.89543 15 3 15.8954 3 17V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V17C11 15.8954 10.1046 15 9 15H5ZM15 3C13.8954 3 13 3.89543 13 5V7C13 8.10457 13.8954 9 15 9H19C20.1046 9 21 8.10457 21 7V5C21 3.89543 20.1046 3 19 3H15Z"
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
						d="M3 5C3 3.89543 3.89543 3 5 3H7C8.10457 3 9 3.89543 9 5V9C9 10.1046 8.10457 11 7 11H5C3.89543 11 3 10.1046 3 9V5ZM5 4H7C7.55228 4 8 4.44772 8 5V9C8 9.55228 7.55228 10 7 10H5C4.44772 10 4 9.55228 4 9V5C4 4.44772 4.44772 4 5 4Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5C17 6.10457 16.1046 7 15 7H13C11.8954 7 11 6.10457 11 5ZM13 4H15C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H13C12.4477 6 12 5.55228 12 5C12 4.44772 12.4477 4 13 4Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13 9C11.8954 9 11 9.89543 11 11V15C11 16.1046 11.8954 17 13 17H15C16.1046 17 17 16.1046 17 15V11C17 9.89543 16.1046 9 15 9H13ZM15 10H13C12.4477 10 12 10.4477 12 11V15C12 15.5523 12.4477 16 13 16H15C15.5523 16 16 15.5523 16 15V11C16 10.4477 15.5523 10 15 10Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3 15C3 13.8954 3.89543 13 5 13H7C8.10457 13 9 13.8954 9 15C9 16.1046 8.10457 17 7 17H5C3.89543 17 3 16.1046 3 15ZM5 14H7C7.55228 14 8 14.4477 8 15C8 15.5523 7.55228 16 7 16H5C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14Z"
					/>
				</svg>
			);
	}
};

IconWidget.iconName = "widget";

export default IconWidget;
