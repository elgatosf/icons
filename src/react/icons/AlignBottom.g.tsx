import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignBottom = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6 16C6 17.1046 6.89543 18 8 18H9C10.1046 18 11 17.1046 11 16L11 5C11 3.89543 10.1046 3 9 3H8C6.89543 3 6 3.89543 6 5L6 16ZM7.5 5L7.5 16C7.5 16.2761 7.72386 16.5 8 16.5H9C9.27614 16.5 9.5 16.2761 9.5 16L9.5 5C9.5 4.72386 9.27614 4.5 9 4.5H8C7.72386 4.5 7.5 4.72386 7.5 5Z"
					/>
					<path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15 18C13.8954 18 13 17.1046 13 16V10C13 8.89543 13.8954 8 15 8H16C17.1046 8 18 8.89543 18 10V16C18 17.1046 17.1046 18 16 18H15ZM14.5 16V10C14.5 9.72386 14.7239 9.5 15 9.5H16C16.2761 9.5 16.5 9.72386 16.5 10V16C16.5 16.2761 16.2761 16.5 16 16.5H15C14.7239 16.5 14.5 16.2761 14.5 16Z"
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
						d="M6.5 2C5.67157 2 5 2.67157 5 3.5V13.5C5 14.3284 5.67157 15 6.5 15H7.5C8.32843 15 9 14.3284 9 13.5V3.5C9 2.67157 8.32843 2 7.5 2H6.5ZM7.5 3H6.5C6.22386 3 6 3.22386 6 3.5V13.5C6 13.7761 6.22386 14 6.5 14H7.5C7.77614 14 8 13.7761 8 13.5V3.5C8 3.22386 7.77614 3 7.5 3Z"
					/>
					<path d="M2 17.5C2 17.2239 2.22386 17 2.5 17H17.5C17.7761 17 18 17.2239 18 17.5C18 17.7761 17.7761 18 17.5 18H2.5C2.22386 18 2 17.7761 2 17.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11 7.5C11 6.67157 11.6716 6 12.5 6H13.5C14.3284 6 15 6.67157 15 7.5V13.5C15 14.3284 14.3284 15 13.5 15H12.5C11.6716 15 11 14.3284 11 13.5V7.5ZM12.5 7H13.5C13.7761 7 14 7.22386 14 7.5V13.5C14 13.7761 13.7761 14 13.5 14H12.5C12.2239 14 12 13.7761 12 13.5V7.5C12 7.22386 12.2239 7 12.5 7Z"
					/>
				</svg>
			);
	}
};

IconAlignBottom.iconName = "align-bottom";

export default IconAlignBottom;
