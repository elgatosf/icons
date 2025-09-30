import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignVerticalCenter = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6 18C6 19.1046 6.89543 20 8 20H9C10.1046 20 11 19.1046 11 18V12.75H13V15C13 16.1046 13.8954 17 15 17H16C17.1046 17 18 16.1046 18 15V12.75H20.25C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25H18V9C18 7.89543 17.1046 7 16 7L15 7C13.8954 7 13 7.89543 13 9V11.25H11V6C11 4.89543 10.1046 4 9 4H8C6.89543 4 6 4.89543 6 6L6 11.25H3.75C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H6L6 18ZM7.5 18C7.5 18.2761 7.72386 18.5 8 18.5H9C9.27614 18.5 9.5 18.2761 9.5 18L9.5 6C9.5 5.72386 9.27614 5.5 9 5.5H8C7.72386 5.5 7.5 5.72386 7.5 6L7.5 18ZM15 15.5C14.7239 15.5 14.5 15.2761 14.5 15V9C14.5 8.72386 14.7239 8.5 15 8.5H16C16.2761 8.5 16.5 8.72386 16.5 9V15C16.5 15.2761 16.2761 15.5 16 15.5H15Z"
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
						d="M2 10C2 9.72386 2.22386 9.5 2.5 9.5L5 9.5L5 4.5C5 3.67157 5.67157 3 6.5 3L7.5 3C8.32843 3 9 3.67157 9 4.5L9 9.5L11 9.5L11 6.5C11 5.67157 11.6716 5 12.5 5L13.5 5C14.3284 5 15 5.67157 15 6.5L15 9.5L17.5 9.5C17.7761 9.5 18 9.72386 18 10C18 10.2761 17.7761 10.5 17.5 10.5L15 10.5L15 13.5C15 14.3284 14.3284 15 13.5 15L12.5 15C11.6716 15 11 14.3284 11 13.5L11 10.5L9 10.5L9 15.5C9 16.3284 8.32843 17 7.5 17L6.5 17C5.67157 17 5 16.3284 5 15.5L5 10.5L2.5 10.5C2.22386 10.5 2 10.2761 2 10ZM6 15.5L6 4.5C6 4.22386 6.22386 4 6.5 4L7.5 4C7.77614 4 8 4.22386 8 4.5L8 15.5C8 15.7761 7.77614 16 7.5 16L6.5 16C6.22386 16 6 15.7761 6 15.5ZM12.5 14C12.2239 14 12 13.7761 12 13.5L12 6.5C12 6.22386 12.2239 6 12.5 6L13.5 6C13.7761 6 14 6.22386 14 6.5L14 13.5C14 13.7761 13.7761 14 13.5 14L12.5 14Z"
					/>
				</svg>
			);
	}
};

IconAlignVerticalCenter.iconName = "align-vertical-center";

export default IconAlignVerticalCenter;
