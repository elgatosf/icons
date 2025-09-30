import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBoard = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M14.5 5.5H9.5V18.5H14.5V5.5ZM16 5.5V18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V6C20.5 5.72386 20.2761 5.5 20 5.5H16ZM4 5.5H8V18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V6C3.5 5.72386 3.72386 5.5 4 5.5ZM4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4Z"
					/>
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
						d="M10 4H6V12H10V4ZM9.5 3H10.5H13C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H10.5H9.5H6.5H5.5H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H5.5H6.5H9.5ZM11 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H11V12ZM3 12H5V4H3C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12Z"
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
						d="M12 5H8V15H12V5ZM13 5V15H16C16.5523 15 17 14.5523 17 14V6C17 5.44772 16.5523 5 16 5H13ZM4 5H7V15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5ZM4 4C2.89543 4 2 4.89543 2 6V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H4Z"
					/>
				</svg>
			);
	}
};

IconBoard.iconName = "board";

export default IconBoard;
