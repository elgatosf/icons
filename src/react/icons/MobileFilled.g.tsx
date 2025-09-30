import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMobileFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20L18 4C18 2.89543 17.1046 2 16 2H8C6.89543 2 6 2.89543 6 4V20ZM13.25 19C13.6642 19 14 18.6642 14 18.25C14 17.8358 13.6642 17.5 13.25 17.5H10.75C10.3358 17.5 10 17.8358 10 18.25C10 18.6642 10.3358 19 10.75 19H13.25Z"
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
						d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V4C16 2.89543 15.1046 2 14 2H6ZM8.5 14C8.22386 14 8 14.2239 8 14.5C8 14.7761 8.22386 15 8.5 15H11.5C11.7761 15 12 14.7761 12 14.5C12 14.2239 11.7761 14 11.5 14H8.5Z"
					/>
				</svg>
			);
	}
};

IconMobileFilled.iconName = "mobile--filled";

export default IconMobileFilled;
