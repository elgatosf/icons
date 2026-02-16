import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAppsAddFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9 13C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15C3 13.8954 3.89543 13 5 13H9Z" />
					<path d="M17 13C17.4142 13 17.75 13.3358 17.75 13.75V16.2549H20.2549C20.6691 16.2549 21.0048 16.5907 21.0049 17.0049C21.0049 17.4191 20.6691 17.7549 20.2549 17.7549H17.75V20.25C17.75 20.6642 17.4142 21 17 21C16.5858 21 16.25 20.6642 16.25 20.25V17.7549H13.7549C13.3407 17.7549 13.0049 17.4191 13.0049 17.0049C13.0049 16.5907 13.3407 16.2549 13.7549 16.2549H16.25V13.75C16.25 13.3358 16.5858 13 17 13Z" />
					<path d="M9 3C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5C3 3.89543 3.89543 3 5 3H9Z" />
					<path d="M19 3C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5C13 3.89543 13.8954 3 15 3H19Z" />
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
					<path d="M7 11C8.10457 11 9 11.8954 9 13V15C9 16.1046 8.10457 17 7 17H5C3.89543 17 3 16.1046 3 15V13C3 11.8954 3.89543 11 5 11H7Z" />
					<path d="M14 11C14.2761 11 14.5 11.2239 14.5 11.5V13.5H16.5049C16.781 13.5 17.0049 13.7239 17.0049 14C17.0049 14.2761 16.781 14.5 16.5049 14.5H14.5V16.5C14.5 16.7761 14.2761 17 14 17C13.7239 17 13.5 16.7761 13.5 16.5V14.5H11.5C11.2239 14.5 11 14.2761 11 14C11 13.7239 11.2239 13.5 11.5 13.5H13.5V11.5C13.5 11.2239 13.7239 11 14 11Z" />
					<path d="M7 3C8.10457 3 9 3.89543 9 5V7C9 8.10457 8.10457 9 7 9H5C3.89543 9 3 8.10457 3 7V5C3 3.89543 3.89543 3 5 3H7Z" />
					<path d="M15 3C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5C11 3.89543 11.8954 3 13 3H15Z" />
				</svg>
			);
	}
};

IconAppsAddFilled.iconName = "apps-add--filled";

export default IconAppsAddFilled;
