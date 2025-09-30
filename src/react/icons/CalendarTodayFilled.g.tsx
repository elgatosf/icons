import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCalendarTodayFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.5 11.5C10.3284 11.5 11 12.1716 11 13V15C11 15.8284 10.3284 16.5 9.5 16.5H7.5C6.67157 16.5 6 15.8284 6 15V13C6 12.1716 6.67157 11.5 7.5 11.5H9.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16.25 2C16.6642 2 17 2.33579 17 2.75V4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H7V2.75C7 2.33579 7.33579 2 7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2ZM4.5 19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V10H4.5V19Z"
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
					<path d="M8 9C8.55228 9 9 9.44772 9 10V12C9 12.5523 8.55228 13 8 13H6C5.44772 13 5 12.5523 5 12V10C5 9.44772 5.44772 9 6 9H8Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13.5 2C13.7761 2 14 2.22386 14 2.5V4H15L15.2041 4.01074C16.2128 4.113 17 4.96435 17 6V15L16.9893 15.2041C16.8938 16.1457 16.1457 16.8938 15.2041 16.9893L15 17H5L4.7959 16.9893C3.85435 16.8938 3.1062 16.1457 3.01074 15.2041L3 15V6C3 4.96435 3.78722 4.113 4.7959 4.01074L5 4H6V2.5C6 2.22386 6.22386 2 6.5 2C6.77614 2 7 2.22386 7 2.5V4H13V2.5C13 2.22386 13.2239 2 13.5 2ZM4 15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 15.5523 16 15V8H4V15Z"
					/>
				</svg>
			);
	}
};

IconCalendarTodayFilled.iconName = "calendar-today--filled";

export default IconCalendarTodayFilled;
