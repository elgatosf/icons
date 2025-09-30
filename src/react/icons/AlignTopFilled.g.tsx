import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignTopFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.75 4.5C3.33579 4.5 3 4.16421 3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5L3.75 4.5Z" />
					<path d="M8 6C6.89543 6 6 6.89543 6 8L6 19C6 20.1046 6.89543 21 8 21H9C10.1046 21 11 20.1046 11 19L11 8C11 6.89543 10.1046 6 9 6L8 6Z" />
					<path d="M13 8C13 6.89543 13.8954 6 15 6H16C17.1046 6 18 6.89543 18 8L18 14C18 15.1046 17.1046 16 16 16H15C13.8954 16 13 15.1046 13 14V8Z" />
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
					<path d="M5 16.5C5 17.3284 5.67157 18 6.5 18H7.5C8.32843 18 9 17.3284 9 16.5V6.5C9 5.67157 8.32843 5 7.5 5H6.5C5.67157 5 5 5.67157 5 6.5V16.5Z" />
					<path d="M2 2.5C2 2.77614 2.22386 3 2.5 3H17.5C17.7761 3 18 2.77614 18 2.5C18 2.22386 17.7761 2 17.5 2H2.5C2.22386 2 2 2.22386 2 2.5Z" />
					<path d="M12.5 14C11.6716 14 11 13.3284 11 12.5V6.5C11 5.67157 11.6716 5 12.5 5H13.5C14.3284 5 15 5.67157 15 6.5V12.5C15 13.3284 14.3284 14 13.5 14H12.5Z" />
				</svg>
			);
	}
};

IconAlignTopFilled.iconName = "align-top--filled";

export default IconAlignTopFilled;
