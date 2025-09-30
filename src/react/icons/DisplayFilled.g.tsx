import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDisplayFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 4C2.89543 4 2 4.89543 2 6V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V6C22 4.89543 21.1046 4 20 4H4Z" />
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
					<path d="M3 3C1.89543 3 1 3.89543 1 5V9C1 10.1046 1.89543 11 3 11H13C14.1046 11 15 10.1046 15 9V5C15 3.89543 14.1046 3 13 3H3Z" />
					<path d="M6 12C5.72386 12 5.5 12.2239 5.5 12.5C5.5 12.7761 5.72386 13 6 13H10C10.2761 13 10.5 12.7761 10.5 12.5C10.5 12.2239 10.2761 12 10 12H6Z" />
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
					<path d="M4 3C2.89543 3 2 3.89543 2 5V12C2 13.1046 2.89543 14 4 14H16C17.1046 14 18 13.1046 18 12V5C18 3.89543 17.1046 3 16 3H4Z" />
					<path d="M7.5 16C7.22386 16 7 16.2239 7 16.5C7 16.7761 7.22386 17 7.5 17H12.5C12.7761 17 13 16.7761 13 16.5C13 16.2239 12.7761 16 12.5 16H7.5Z" />
				</svg>
			);
	}
};

IconDisplayFilled.iconName = "display--filled";

export default IconDisplayFilled;
