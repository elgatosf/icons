import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignLeftFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 3.75C4.5 3.33579 4.16421 3 3.75 3C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21C4.16421 21 4.5 20.6642 4.5 20.25V3.75Z" />
					<path d="M6 8C6 6.89543 6.89543 6 8 6H19C20.1046 6 21 6.89543 21 8V9C21 10.1046 20.1046 11 19 11H8C6.89543 11 6 10.1046 6 9V8Z" />
					<path d="M8 13C6.89543 13 6 13.8954 6 15V16C6 17.1046 6.89543 18 8 18H14C15.1046 18 16 17.1046 16 16V15C16 13.8954 15.1046 13 14 13H8Z" />
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
					<path d="M16.5 5C17.3284 5 18 5.67157 18 6.5L18 7.5C18 8.32843 17.3284 9 16.5 9L6.5 9C5.67157 9 5 8.32843 5 7.5L5 6.5C5 5.67157 5.67157 5 6.5 5L16.5 5Z" />
					<path d="M2.5 2C2.77614 2 3 2.22386 3 2.5L3 17.5C3 17.7761 2.77614 18 2.5 18C2.22386 18 2 17.7761 2 17.5L2 2.5C2 2.22386 2.22386 2 2.5 2Z" />
					<path d="M14 12.5C14 11.6716 13.3284 11 12.5 11L6.5 11C5.67157 11 5 11.6716 5 12.5L5 13.5C5 14.3284 5.67157 15 6.5 15L12.5 15C13.3284 15 14 14.3284 14 13.5L14 12.5Z" />
				</svg>
			);
	}
};

IconAlignLeftFilled.iconName = "align-left--filled";

export default IconAlignLeftFilled;
