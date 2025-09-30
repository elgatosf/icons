import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignBottomFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6 16C6 17.1046 6.89543 18 8 18H9C10.1046 18 11 17.1046 11 16V5C11 3.89543 10.1046 3 9 3H8C6.89543 3 6 3.89543 6 5L6 16Z" />
					<path d="M15 18C13.8954 18 13 17.1046 13 16V10C13 8.89543 13.8954 8 15 8H16C17.1046 8 18 8.89543 18 10V16C18 17.1046 17.1046 18 16 18H15Z" />
					<path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75Z" />
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
					<path d="M5 3.5C5 2.67157 5.67157 2 6.5 2H7.5C8.32843 2 9 2.67157 9 3.5V13.5C9 14.3284 8.32843 15 7.5 15H6.5C5.67157 15 5 14.3284 5 13.5V3.5Z" />
					<path d="M2 17.5C2 17.2239 2.22386 17 2.5 17H17.5C17.7761 17 18 17.2239 18 17.5C18 17.7761 17.7761 18 17.5 18H2.5C2.22386 18 2 17.7761 2 17.5Z" />
					<path d="M12.5 6C11.6716 6 11 6.67157 11 7.5V13.5C11 14.3284 11.6716 15 12.5 15H13.5C14.3284 15 15 14.3284 15 13.5V7.5C15 6.67157 14.3284 6 13.5 6H12.5Z" />
				</svg>
			);
	}
};

IconAlignBottomFilled.iconName = "align-bottom--filled";

export default IconAlignBottomFilled;
