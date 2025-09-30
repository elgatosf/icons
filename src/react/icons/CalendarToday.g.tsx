import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCalendarToday = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M9.65332 11.5078C10.4097 11.5846 11 12.2233 11 13V15L10.9922 15.1533C10.9205 15.8593 10.3593 16.4205 9.65332 16.4922L9.5 16.5H7.5L7.34668 16.4922C6.64069 16.4205 6.07949 15.8593 6.00781 15.1533L6 15V13C6 12.2233 6.59028 11.5846 7.34668 11.5078L7.5 11.5H9.5L9.65332 11.5078ZM7.5 15H9.5V13H7.5V15Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16.25 2C16.6642 2 17 2.33579 17 2.75V4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H7V2.75C7 2.33579 7.33579 2 7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2ZM4.5 19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V10H4.5V19ZM5 5.5C4.72386 5.5 4.5 5.72386 4.5 6V8.5H19.5V6C19.5 5.72386 19.2761 5.5 19 5.5H5Z"
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
						d="M8.10254 9.00488C8.60667 9.05621 9 9.48232 9 10V12L8.99512 12.1025C8.94379 12.6067 8.51768 13 8 13H6L5.89746 12.9951C5.39333 12.9438 5 12.5177 5 12V10C5 9.44772 5.44772 9 6 9H8L8.10254 9.00488ZM6 12H8V10H6V12Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13.5 2C13.7761 2 14 2.22386 14 2.5V4H15L15.2041 4.01074C16.2128 4.113 17 4.96435 17 6V15L16.9893 15.2041C16.8938 16.1457 16.1457 16.8938 15.2041 16.9893L15 17H5L4.7959 16.9893C3.85435 16.8938 3.1062 16.1457 3.01074 15.2041L3 15V6C3 4.96435 3.78722 4.113 4.7959 4.01074L5 4H6V2.5C6 2.22386 6.22386 2 6.5 2C6.77614 2 7 2.22386 7 2.5V4H13V2.5C13 2.22386 13.2239 2 13.5 2ZM4 15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 15.5523 16 15V8H4V15ZM5 5C4.44772 5 4 5.44772 4 6V7H16V6C16 5.44772 15.5523 5 15 5H5Z"
					/>
				</svg>
			);
	}
};

IconCalendarToday.iconName = "calendar-today";

export default IconCalendarToday;
