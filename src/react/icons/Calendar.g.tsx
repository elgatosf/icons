import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCalendar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75ZM4.5 19V10L19.5 10V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19ZM19 5.5C19.2761 5.5 19.5 5.72386 19.5 6V8.5L4.5 8.5V6C4.5 5.72386 4.72386 5.5 5 5.5H19Z"
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
						d="M13.5 2C13.7761 2 14 2.22386 14 2.5V4H15L15.2041 4.01074C16.2128 4.113 17 4.96435 17 6V15L16.9893 15.2041C16.8938 16.1457 16.1457 16.8938 15.2041 16.9893L15 17H5L4.7959 16.9893C3.85435 16.8938 3.1062 16.1457 3.01074 15.2041L3 15V6C3 4.96435 3.78722 4.113 4.7959 4.01074L5 4H6V2.5C6 2.22386 6.22386 2 6.5 2C6.77614 2 7 2.22386 7 2.5V4H13V2.5C13 2.22386 13.2239 2 13.5 2ZM4 15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 15.5523 16 15V8H4V15ZM5 5C4.44772 5 4 5.44772 4 6V7H16V6C16 5.44772 15.5523 5 15 5H5Z"
					/>
				</svg>
			);
	}
};

IconCalendar.iconName = "calendar";

export default IconCalendar;
