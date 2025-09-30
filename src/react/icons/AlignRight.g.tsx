import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16 6C17.1046 6 18 6.89543 18 8V9C18 10.1046 17.1046 11 16 11H5C3.89543 11 3 10.1046 3 9V8C3 6.89543 3.89543 6 5 6H16ZM5 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V9C16.5 9.27614 16.2761 9.5 16 9.5H5C4.72386 9.5 4.5 9.27614 4.5 9V8C4.5 7.72386 4.72386 7.5 5 7.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M18 15C18 13.8954 17.1046 13 16 13H10C8.89543 13 8 13.8954 8 15V16C8 17.1046 8.89543 18 10 18H16C17.1046 18 18 17.1046 18 16V15ZM16 14.5H10C9.72386 14.5 9.5 14.7239 9.5 15V16C9.5 16.2761 9.72386 16.5 10 16.5H16C16.2761 16.5 16.5 16.2761 16.5 16V15C16.5 14.7239 16.2761 14.5 16 14.5Z"
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
						d="M2 6.5C2 5.67157 2.67157 5 3.5 5L13.5 5C14.3284 5 15 5.67157 15 6.5L15 7.5C15 8.32843 14.3284 9 13.5 9L3.5 9C2.67157 9 2 8.32843 2 7.5L2 6.5ZM3 7.5L3 6.5C3 6.22386 3.22386 6 3.5 6L13.5 6C13.7761 6 14 6.22386 14 6.5L14 7.5C14 7.77614 13.7761 8 13.5 8L3.5 8C3.22386 8 3 7.77614 3 7.5Z"
					/>
					<path d="M17.5 2C17.2239 2 17 2.22386 17 2.5L17 17.5C17 17.7761 17.2239 18 17.5 18C17.7761 18 18 17.7761 18 17.5L18 2.5C18 2.22386 17.7761 2 17.5 2Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7.5 11C6.67157 11 6 11.6716 6 12.5L6 13.5C6 14.3284 6.67157 15 7.5 15L13.5 15C14.3284 15 15 14.3284 15 13.5L15 12.5C15 11.6716 14.3284 11 13.5 11L7.5 11ZM7 12.5L7 13.5C7 13.7761 7.22386 14 7.5 14L13.5 14C13.7761 14 14 13.7761 14 13.5L14 12.5C14 12.2239 13.7761 12 13.5 12L7.5 12C7.22386 12 7 12.2239 7 12.5Z"
					/>
				</svg>
			);
	}
};

IconAlignRight.iconName = "align-right";

export default IconAlignRight;
