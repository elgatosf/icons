import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCartFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M1 4.75C1 4.33579 1.33579 4 1.75 4H3.07595C3.78892 4 4.43061 4.43253 4.69811 5.09341L5.06506 6H20.25C20.4968 6 20.7279 6.12146 20.8678 6.32479C21.0078 6.52812 21.0387 6.78729 20.9505 7.01785L18.1921 14.2321C17.7851 15.2968 16.7634 16 15.6235 16H9.3481C8.22772 16 7.21935 15.3203 6.79899 14.2818L3.30769 5.6562C3.26947 5.56179 3.1778 5.5 3.07595 5.5H1.75C1.33579 5.5 1 5.16421 1 4.75Z" />
					<path d="M8.5 17C9.32843 17 10 17.6716 10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17Z" />
					<path d="M18 18.5C18 17.6716 17.3284 17 16.5 17C15.6716 17 15 17.6716 15 18.5C15 19.3284 15.6716 20 16.5 20C17.3284 20 18 19.3284 18 18.5Z" />
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
					<path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H2.38395C2.82556 4 3.21489 4.28967 3.34178 4.71265L5.70039 12.5747C5.95418 13.4207 6.73283 14 7.61605 14H13.384C14.2672 14 15.0458 13.4207 15.2996 12.5747L17.3789 5.64367C17.4243 5.49229 17.3955 5.32834 17.3011 5.20153C17.2068 5.07473 17.0581 5 16.9 5H4.47202L4.29961 4.4253C4.04582 3.57934 3.26717 3 2.38395 3H1.5Z" />
					<path d="M8 16C8 16.5523 7.55228 17 7 17C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15C7.55228 15 8 15.4477 8 16Z" />
					<path d="M14 17C14.5523 17 15 16.5523 15 16C15 15.4477 14.5523 15 14 15C13.4477 15 13 15.4477 13 16C13 16.5523 13.4477 17 14 17Z" />
				</svg>
			);
	}
};

IconCartFilled.iconName = "cart--filled";

export default IconCartFilled;
