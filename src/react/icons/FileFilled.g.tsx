import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFileFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V11H13C11.8954 11 11 10.1046 11 9V2Z" />
					<path d="M19.25 9.5L12.5 2.75V9C12.5 9.27614 12.7239 9.5 13 9.5H19.25Z" />
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
					<path d="M10 2H6C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V8H12C10.8954 8 10 7.10457 10 6V2Z" />
					<path d="M15.9729 7C15.9048 6.59137 15.711 6.21097 15.4142 5.91421L12.0858 2.58579C11.789 2.28903 11.4086 2.09517 11 2.02714V6C11 6.55228 11.4477 7 12 7H15.9729Z" />
				</svg>
			);
	}
};

IconFileFilled.iconName = "file--filled";

export default IconFileFilled;
