import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCopyFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6.5 8.5C6.5 8.22386 6.27614 8 6 8H5C3.89543 8 3 8.89543 3 10V19C3 20.1046 3.89543 21 5 21H14C15.1046 21 16 20.1046 16 19V18C16 17.7239 15.7761 17.5 15.5 17.5H10C8.067 17.5 6.5 15.933 6.5 14V8.5Z" />
					<path d="M21 5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5V14C8 15.1046 8.89543 16 10 16H19C20.1046 16 21 15.1046 21 14V5Z" />
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
					<path d="M9 3C7.89543 3 7 3.89543 7 5V11C7 12.1046 7.89543 13 9 13H15C16.1046 13 17 12.1046 17 11V5C17 3.89543 16.1046 3 15 3H9Z" />
					<path d="M5 7C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H11C12.1046 17 13 16.1046 13 15V14.5C13 14.2239 12.7761 14 12.5 14H9C7.34315 14 6 12.6569 6 11V7.5C6 7.22386 5.77614 7 5.5 7H5Z" />
				</svg>
			);
	}
};

IconCopyFilled.iconName = "copy--filled";

export default IconCopyFilled;
