import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAnalytics = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M11.5 3C10.3954 3 9.5 3.89543 9.5 5V19C9.5 20.1046 10.3954 21 11.5 21H12.5C13.6046 21 14.5 20.1046 14.5 19V5C14.5 3.89543 13.6046 3 12.5 3H11.5ZM12.5 4.5H11.5C11.2239 4.5 11 4.72386 11 5V19C11 19.2761 11.2239 19.5 11.5 19.5H12.5C12.7761 19.5 13 19.2761 13 19V5C13 4.72386 12.7761 4.5 12.5 4.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5 11C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V13C8 11.8954 7.10457 11 6 11H5ZM6 12.5H5C4.72386 12.5 4.5 12.7239 4.5 13V19C4.5 19.2761 4.72386 19.5 5 19.5H6C6.27614 19.5 6.5 19.2761 6.5 19V13C6.5 12.7239 6.27614 12.5 6 12.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16 9C16 7.89543 16.8954 7 18 7H19C20.1046 7 21 7.89543 21 9V19C21 20.1046 20.1046 21 19 21H18C16.8954 21 16 20.1046 16 19V9ZM18 8.5H19C19.2761 8.5 19.5 8.72386 19.5 9V19C19.5 19.2761 19.2761 19.5 19 19.5H18C17.7239 19.5 17.5 19.2761 17.5 19V9C17.5 8.72386 17.7239 8.5 18 8.5Z"
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
						d="M9.5 3C8.67157 3 8 3.67157 8 4.5V15.5C8 16.3284 8.67157 17 9.5 17H10.5C11.3284 17 12 16.3284 12 15.5V4.5C12 3.67157 11.3284 3 10.5 3H9.5ZM10.5 4H9.5C9.22386 4 9 4.22386 9 4.5V15.5C9 15.7761 9.22386 16 9.5 16H10.5C10.7761 16 11 15.7761 11 15.5V4.5C11 4.22386 10.7761 4 10.5 4Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M4.5 9C3.67157 9 3 9.67157 3 10.5V15.5C3 16.3284 3.67157 17 4.5 17H5.5C6.32843 17 7 16.3284 7 15.5V10.5C7 9.67157 6.32843 9 5.5 9H4.5ZM5.5 10H4.5C4.22386 10 4 10.2239 4 10.5V15.5C4 15.7761 4.22386 16 4.5 16H5.5C5.77614 16 6 15.7761 6 15.5V10.5C6 10.2239 5.77614 10 5.5 10Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13 7.5C13 6.67157 13.6716 6 14.5 6H15.5C16.3284 6 17 6.67157 17 7.5V15.5C17 16.3284 16.3284 17 15.5 17H14.5C13.6716 17 13 16.3284 13 15.5V7.5ZM14.5 7H15.5C15.7761 7 16 7.22386 16 7.5V15.5C16 15.7761 15.7761 16 15.5 16H14.5C14.2239 16 14 15.7761 14 15.5V7.5C14 7.22386 14.2239 7 14.5 7Z"
					/>
				</svg>
			);
	}
};

IconAnalytics.iconName = "analytics";

export default IconAnalytics;
