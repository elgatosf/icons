import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArticleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7.75 7C7.33579 7 7 7.33579 7 7.75C7 8.16421 7.33579 8.5 7.75 8.5L16.25 8.5C16.6642 8.5 17 8.16421 17 7.75C17 7.33579 16.6642 7 16.25 7L7.75 7ZM7 11.75C7 11.3358 7.33579 11 7.75 11L16.25 11C16.6642 11 17 11.3358 17 11.75C17 12.1642 16.6642 12.5 16.25 12.5L7.75 12.5C7.33579 12.5 7 12.1642 7 11.75ZM7.75 15C7.33579 15 7 15.3358 7 15.75C7 16.1642 7.33579 16.5 7.75 16.5H12.25C12.6642 16.5 13 16.1642 13 15.75C13 15.3358 12.6642 15 12.25 15H7.75Z"
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
						d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3H5ZM6.5 6C6.22386 6 6 6.22386 6 6.5C6 6.77614 6.22386 7 6.5 7H13.5C13.7761 7 14 6.77614 14 6.5C14 6.22386 13.7761 6 13.5 6H6.5ZM6 9.5C6 9.22386 6.22386 9 6.5 9H13.5C13.7761 9 14 9.22386 14 9.5C14 9.77614 13.7761 10 13.5 10H6.5C6.22386 10 6 9.77614 6 9.5ZM6.5 12C6.22386 12 6 12.2239 6 12.5C6 12.7761 6.22386 13 6.5 13H10.5C10.7761 13 11 12.7761 11 12.5C11 12.2239 10.7761 12 10.5 12H6.5Z"
					/>
				</svg>
			);
	}
};

IconArticleFilled.iconName = "article--filled";

export default IconArticleFilled;
