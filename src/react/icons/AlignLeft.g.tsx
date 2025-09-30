import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignLeft = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 3.75C4.5 3.33579 4.16421 3 3.75 3C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21C4.16421 21 4.5 20.6642 4.5 20.25V3.75Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8 6C6.89543 6 6 6.89543 6 8V9C6 10.1046 6.89543 11 8 11H19C20.1046 11 21 10.1046 21 9V8C21 6.89543 20.1046 6 19 6H8ZM19 7.5H8C7.72386 7.5 7.5 7.72386 7.5 8V9C7.5 9.27614 7.72386 9.5 8 9.5H19C19.2761 9.5 19.5 9.27614 19.5 9V8C19.5 7.72386 19.2761 7.5 19 7.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6 15C6 13.8954 6.89543 13 8 13H14C15.1046 13 16 13.8954 16 15V16C16 17.1046 15.1046 18 14 18H8C6.89543 18 6 17.1046 6 16V15ZM8 14.5H14C14.2761 14.5 14.5 14.7239 14.5 15V16C14.5 16.2761 14.2761 16.5 14 16.5H8C7.72386 16.5 7.5 16.2761 7.5 16V15C7.5 14.7239 7.72386 14.5 8 14.5Z"
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
						d="M18 6.5C18 5.67157 17.3284 5 16.5 5L6.5 5C5.67157 5 5 5.67157 5 6.5L5 7.5C5 8.32843 5.67157 9 6.5 9L16.5 9C17.3284 9 18 8.32843 18 7.5L18 6.5ZM17 7.5L17 6.5C17 6.22386 16.7761 6 16.5 6L6.5 6C6.22386 6 6 6.22386 6 6.5L6 7.5C6 7.77614 6.22386 8 6.5 8L16.5 8C16.7761 8 17 7.77614 17 7.5Z"
					/>
					<path d="M2.5 2C2.77614 2 3 2.22386 3 2.5L3 17.5C3 17.7761 2.77614 18 2.5 18C2.22386 18 2 17.7761 2 17.5L2 2.5C2 2.22386 2.22386 2 2.5 2Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.5 11C13.3284 11 14 11.6716 14 12.5L14 13.5C14 14.3284 13.3284 15 12.5 15L6.5 15C5.67157 15 5 14.3284 5 13.5L5 12.5C5 11.6716 5.67157 11 6.5 11L12.5 11ZM13 12.5L13 13.5C13 13.7761 12.7761 14 12.5 14L6.5 14C6.22386 14 6 13.7761 6 13.5L6 12.5C6 12.2239 6.22386 12 6.5 12L12.5 12C12.7761 12 13 12.2239 13 12.5Z"
					/>
				</svg>
			);
	}
};

IconAlignLeft.iconName = "align-left";

export default IconAlignLeft;
