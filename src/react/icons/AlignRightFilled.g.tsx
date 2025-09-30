import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignRightFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M19.5 3.75C19.5 3.33579 19.8358 3 20.25 3C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21C19.8358 21 19.5 20.6642 19.5 20.25V3.75Z" />
					<path d="M18 15C18 13.8954 17.1046 13 16 13H10C8.89543 13 8 13.8954 8 15V16C8 17.1046 8.89543 18 10 18H16C17.1046 18 18 17.1046 18 16V15Z" />
					<path d="M16 6C17.1046 6 18 6.89543 18 8V9C18 10.1046 17.1046 11 16 11H5C3.89543 11 3 10.1046 3 9V8C3 6.89543 3.89543 6 5 6H16Z" />
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
					<path d="M3.5 5C2.67157 5 2 5.67157 2 6.5L2 7.5C2 8.32843 2.67157 9 3.5 9L13.5 9C14.3284 9 15 8.32843 15 7.5L15 6.5C15 5.67157 14.3284 5 13.5 5L3.5 5Z" />
					<path d="M17.5 2C17.2239 2 17 2.22386 17 2.5L17 17.5C17 17.7761 17.2239 18 17.5 18C17.7761 18 18 17.7761 18 17.5L18 2.5C18 2.22386 17.7761 2 17.5 2Z" />
					<path d="M6 12.5C6 11.6716 6.67157 11 7.5 11L13.5 11C14.3284 11 15 11.6716 15 12.5L15 13.5C15 14.3284 14.3284 15 13.5 15L7.5 15C6.67157 15 6 14.3284 6 13.5L6 12.5Z" />
				</svg>
			);
	}
};

IconAlignRightFilled.iconName = "align-right--filled";

export default IconAlignRightFilled;
