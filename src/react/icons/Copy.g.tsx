import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCopy = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V14C19.5 14.2761 19.2761 14.5 19 14.5H10C9.72386 14.5 9.5 14.2761 9.5 14V5C9.5 4.72386 9.72386 4.5 10 4.5ZM19 3C20.1046 3 21 3.89543 21 5V14C21 15.1046 20.1046 16 19 16H10C8.89543 16 8 15.1046 8 14V5C8 3.89543 8.89543 3 10 3H19Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.5 8.75C6.5 8.33579 6.16421 8 5.75 8H5C3.89543 8 3 8.89543 3 10V19C3 20.1046 3.89543 21 5 21H14C15.1046 21 16 20.1046 16 19V18.25C16 17.8358 15.6642 17.5 15.25 17.5C14.8358 17.5 14.5 17.8358 14.5 18.25V19C14.5 19.2761 14.2761 19.5 14 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V10C4.5 9.72386 4.72386 9.5 5 9.5H5.75C6.16421 9.5 6.5 9.16421 6.5 8.75Z"
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
						d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V11C17 12.1046 16.1046 13 15 13H9C7.89543 13 7 12.1046 7 11V5ZM9 4H15C15.5523 4 16 4.44772 16 5V11C16 11.5523 15.5523 12 15 12H9C8.44772 12 8 11.5523 8 11V5C8 4.44772 8.44772 4 9 4Z"
					/>
					<path d="M4 9C4 8.44772 4.44772 8 5 8H5.5C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H11C12.1046 17 13 16.1046 13 15V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V15C12 15.5523 11.5523 16 11 16H5C4.44772 16 4 15.5523 4 15V9Z" />
				</svg>
			);
	}
};

IconCopy.iconName = "copy";

export default IconCopy;
