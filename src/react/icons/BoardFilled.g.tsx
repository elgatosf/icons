import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBoardFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H7.5V4H4Z" />
					<path d="M9 4V20H15V4H9Z" />
					<path d="M16.5 4V20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H16.5Z" />
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
					<path d="M10 3H6V13H10V3Z" />
					<path d="M11 13H13C14.1046 13 15 12.1046 15 11V5C15 3.89543 14.1046 3 13 3L11 3V13Z" />
					<path d="M3 3L5 3V13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3Z" />
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
					<path d="M4 4C2.89543 4 2 4.89543 2 6V14C2 15.1046 2.89543 16 4 16H7V4H4Z" />
					<path d="M8 4V16H12V4H8Z" />
					<path d="M13 4V16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H13Z" />
				</svg>
			);
	}
};

IconBoardFilled.iconName = "board--filled";

export default IconBoardFilled;
