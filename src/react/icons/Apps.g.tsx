import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconApps = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5ZM5 4.5H9C9.27614 4.5 9.5 4.72386 9.5 5V9C9.5 9.27614 9.27614 9.5 9 9.5H5C4.72386 9.5 4.5 9.27614 4.5 9V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15ZM5 14.5H9C9.27614 14.5 9.5 14.7239 9.5 15V19C9.5 19.2761 9.27614 19.5 9 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V15C4.5 14.7239 4.72386 14.5 5 14.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15 3C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3H15ZM19 4.5H15C14.7239 4.5 14.5 4.72386 14.5 5V9C14.5 9.27614 14.7239 9.5 15 9.5H19C19.2761 9.5 19.5 9.27614 19.5 9V5C19.5 4.72386 19.2761 4.5 19 4.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15ZM15 14.5H19C19.2761 14.5 19.5 14.7239 19.5 15V19C19.5 19.2761 19.2761 19.5 19 19.5H15C14.7239 19.5 14.5 19.2761 14.5 19V15C14.5 14.7239 14.7239 14.5 15 14.5Z"
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
						d="M3 5C3 3.89543 3.89543 3 5 3H7C8.10457 3 9 3.89543 9 5V7C9 8.10457 8.10457 9 7 9H5C3.89543 9 3 8.10457 3 7V5ZM5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5C4 4.44772 4.44772 4 5 4Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3 13C3 11.8954 3.89543 11 5 11H7C8.10457 11 9 11.8954 9 13V15C9 16.1046 8.10457 17 7 17H5C3.89543 17 3 16.1046 3 15V13ZM5 12H7C7.55228 12 8 12.4477 8 13V15C8 15.5523 7.55228 16 7 16H5C4.44772 16 4 15.5523 4 15V13C4 12.4477 4.44772 12 5 12Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13 3C11.8954 3 11 3.89543 11 5V7C11 8.10457 11.8954 9 13 9H15C16.1046 9 17 8.10457 17 7V5C17 3.89543 16.1046 3 15 3H13ZM15 4H13C12.4477 4 12 4.44772 12 5V7C12 7.55228 12.4477 8 13 8H15C15.5523 8 16 7.55228 16 7V5C16 4.44772 15.5523 4 15 4Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13ZM13 12H15C15.5523 12 16 12.4477 16 13V15C16 15.5523 15.5523 16 15 16H13C12.4477 16 12 15.5523 12 15V13C12 12.4477 12.4477 12 13 12Z"
					/>
				</svg>
			);
	}
};

IconApps.iconName = "apps";

export default IconApps;
