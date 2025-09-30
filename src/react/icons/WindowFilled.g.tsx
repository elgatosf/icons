import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 4C2.89543 4 2 4.89543 2 6V7.5H22V6C22 4.89543 21.1046 4 20 4H4Z" />
					<path d="M22 9H2V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V9Z" />
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
					<path d="M3 3C1.89543 3 1 3.89543 1 5V6H15V5C15 3.89543 14.1046 3 13 3H3Z" />
					<path d="M15 7H1V11C1 12.1046 1.89543 13 3 13H13C14.1046 13 15 12.1046 15 11V7Z" />
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
					<path d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z" />
					<path d="M18 8H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8Z" />
				</svg>
			);
	}
};

IconWindowFilled.iconName = "window--filled";

export default IconWindowFilled;
