import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindow = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM4 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V7.5H3.5V6C3.5 5.72386 3.72386 5.5 4 5.5ZM3.5 9V18C3.5 18.2761 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V9H3.5Z"
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
						d="M1 5C1 3.89543 1.89543 3 3 3H13C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5ZM3 4H13C13.5523 4 14 4.44772 14 5V6H2V5C2 4.44772 2.44772 4 3 4ZM2 7V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V7H2Z"
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
						d="M2 6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6ZM4 5H16C16.5523 5 17 5.44772 17 6V7H3V6C3 5.44772 3.44772 5 4 5ZM3 8V14C3 14.5523 3.44772 15 4 15H16C16.5523 15 17 14.5523 17 14V8H3Z"
					/>
				</svg>
			);
	}
};

IconWindow.iconName = "window";

export default IconWindow;
