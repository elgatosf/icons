import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDisplay = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V6ZM4 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V15C20.5 15.2761 20.2761 15.5 20 15.5H4C3.72386 15.5 3.5 15.2761 3.5 15V6C3.5 5.72386 3.72386 5.5 4 5.5Z"
					/>
					<path d="M9.75 18.5C9.33579 18.5 9 18.8358 9 19.25C9 19.6642 9.33579 20 9.75 20H14.25C14.6642 20 15 19.6642 15 19.25C15 18.8358 14.6642 18.5 14.25 18.5H9.75Z" />
				</svg>
			);
		case "s":
			return (
				<svg
					viewBox="0 0 16 16"
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
						d="M1 4C1 2.89543 1.89543 2 3 2H13C14.1046 2 15 2.89543 15 4V10C15 11.1046 14.1046 12 13 12H3C1.89543 12 1 11.1046 1 10V4ZM3 3H13C13.5523 3 14 3.44772 14 4V10C14 10.5523 13.5523 11 13 11H3C2.44772 11 2 10.5523 2 10V4C2 3.44772 2.44772 3 3 3Z"
					/>
					<path d="M6 14C5.72386 14 5.5 14.2239 5.5 14.5C5.5 14.7761 5.72386 15 6 15H10C10.2761 15 10.5 14.7761 10.5 14.5C10.5 14.2239 10.2761 14 10 14H6Z" />
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
						d="M2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V12C18 13.1046 17.1046 14 16 14H4C2.89543 14 2 13.1046 2 12V5ZM4 4H16C16.5523 4 17 4.44772 17 5V12C17 12.5523 16.5523 13 16 13H4C3.44772 13 3 12.5523 3 12V5C3 4.44772 3.44772 4 4 4Z"
					/>
					<path d="M7.5 16C7.22386 16 7 16.2239 7 16.5C7 16.7761 7.22386 17 7.5 17H12.5C12.7761 17 13 16.7761 13 16.5C13 16.2239 12.7761 16 12.5 16H7.5Z" />
				</svg>
			);
	}
};

IconDisplay.iconName = "display";

export default IconDisplay;
