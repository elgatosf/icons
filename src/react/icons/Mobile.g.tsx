import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMobile = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M13.25 19C13.6642 19 14 18.6642 14 18.25C14 17.8358 13.6642 17.5 13.25 17.5H10.75C10.3358 17.5 10 17.8358 10 18.25C10 18.6642 10.3358 19 10.75 19H13.25Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8 22C6.89543 22 6 21.1046 6 20V4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4L18 20C18 21.1046 17.1046 22 16 22H8ZM7.5 20L7.5 4C7.5 3.72386 7.72386 3.5 8 3.5L16 3.5C16.2761 3.5 16.5 3.72386 16.5 4L16.5 20C16.5 20.2761 16.2761 20.5 16 20.5H8C7.72386 20.5 7.5 20.2761 7.5 20Z"
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
					<path d="M8.5 14C8.22386 14 8 14.2239 8 14.5C8 14.7761 8.22386 15 8.5 15H11.5C11.7761 15 12 14.7761 12 14.5C12 14.2239 11.7761 14 11.5 14H8.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M4 4C4 2.89543 4.89543 2 6 2H14C15.1046 2 16 2.89543 16 4V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4ZM6 3H14C14.5523 3 15 3.44772 15 4V16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16V4C5 3.44772 5.44772 3 6 3Z"
					/>
				</svg>
			);
	}
};

IconMobile.iconName = "mobile";

export default IconMobile;
