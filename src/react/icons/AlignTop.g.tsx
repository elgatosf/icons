import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignTop = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.75 4.5C3.33579 4.5 3 4.16421 3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5L3.75 4.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6 8C6 6.89543 6.89543 6 8 6L9 6C10.1046 6 11 6.89543 11 8L11 19C11 20.1046 10.1046 21 9 21H8C6.89543 21 6 20.1046 6 19L6 8ZM7.5 19L7.5 8C7.5 7.72386 7.72386 7.5 8 7.5H9C9.27614 7.5 9.5 7.72386 9.5 8L9.5 19C9.5 19.2761 9.27614 19.5 9 19.5H8C7.72386 19.5 7.5 19.2761 7.5 19Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15 6C13.8954 6 13 6.89543 13 8V14C13 15.1046 13.8954 16 15 16H16C17.1046 16 18 15.1046 18 14V8C18 6.89543 17.1046 6 16 6L15 6ZM14.5 8V14C14.5 14.2761 14.7239 14.5 15 14.5H16C16.2761 14.5 16.5 14.2761 16.5 14V8C16.5 7.72386 16.2761 7.5 16 7.5H15C14.7239 7.5 14.5 7.72386 14.5 8Z"
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
						d="M6.5 18C5.67157 18 5 17.3284 5 16.5V6.5C5 5.67157 5.67157 5 6.5 5H7.5C8.32843 5 9 5.67157 9 6.5V16.5C9 17.3284 8.32843 18 7.5 18H6.5ZM7.5 17H6.5C6.22386 17 6 16.7761 6 16.5V6.5C6 6.22386 6.22386 6 6.5 6H7.5C7.77614 6 8 6.22386 8 6.5V16.5C8 16.7761 7.77614 17 7.5 17Z"
					/>
					<path d="M2 2.5C2 2.77614 2.22386 3 2.5 3H17.5C17.7761 3 18 2.77614 18 2.5C18 2.22386 17.7761 2 17.5 2H2.5C2.22386 2 2 2.22386 2 2.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11 12.5C11 13.3284 11.6716 14 12.5 14H13.5C14.3284 14 15 13.3284 15 12.5V6.5C15 5.67157 14.3284 5 13.5 5H12.5C11.6716 5 11 5.67157 11 6.5V12.5ZM12.5 13H13.5C13.7761 13 14 12.7761 14 12.5V6.5C14 6.22386 13.7761 6 13.5 6H12.5C12.2239 6 12 6.22386 12 6.5V12.5C12 12.7761 12.2239 13 12.5 13Z"
					/>
				</svg>
			);
	}
};

IconAlignTop.iconName = "align-top";

export default IconAlignTop;
