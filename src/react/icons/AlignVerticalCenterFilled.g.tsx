import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignVerticalCenterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8 20C6.89543 20 6 19.1046 6 18L6 12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H6L6 6C6 4.89543 6.89543 4 8 4H9C10.1046 4 11 4.89543 11 6V11.25H13V9C13 7.89543 13.8954 7 15 7L16 7C17.1046 7 18 7.89543 18 9V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H18V15C18 16.1046 17.1046 17 16 17H15C13.8954 17 13 16.1046 13 15V12.75H11V18C11 19.1046 10.1046 20 9 20H8Z" />
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
					<path d="M2 10C2 9.72386 2.22386 9.5 2.5 9.5L5 9.5L5 4.5C5 3.67157 5.67157 3 6.5 3L7.5 3C8.32843 3 9 3.67157 9 4.5L9 9.5L11 9.5L11 6.5C11 5.67157 11.6716 5 12.5 5L13.5 5C14.3284 5 15 5.67157 15 6.5L15 9.5L17.5 9.5C17.7761 9.5 18 9.72386 18 10C18 10.2761 17.7761 10.5 17.5 10.5L15 10.5L15 13.5C15 14.3284 14.3284 15 13.5 15L12.5 15C11.6716 15 11 14.3284 11 13.5L11 10.5L9 10.5L9 15.5C9 16.3284 8.32843 17 7.5 17L6.5 17C5.67157 17 5 16.3284 5 15.5L5 10.5L2.5 10.5C2.22386 10.5 2 10.2761 2 10Z" />
				</svg>
			);
	}
};

IconAlignVerticalCenterFilled.iconName = "align-vertical-center--filled";

export default IconAlignVerticalCenterFilled;
