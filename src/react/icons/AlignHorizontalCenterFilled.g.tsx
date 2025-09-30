import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignHorizontalCenterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V6H18C19.1046 6 20 6.89543 20 8V9C20 10.1046 19.1046 11 18 11H12.75V13H15C16.1046 13 17 13.8954 17 15V16C17 17.1046 16.1046 18 15 18H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V18H9C7.89543 18 7 17.1046 7 16V15C7 13.8954 7.89543 13 9 13H11.25V11H6C4.89543 11 4 10.1046 4 9V8C4 6.89543 4.89543 6 6 6H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z" />
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
					<path d="M10 2C10.2761 2 10.5 2.22386 10.5 2.5V5H15.5C16.3284 5 17 5.67157 17 6.5V7.5C17 8.32843 16.3284 9 15.5 9H10.5V11H13.5C14.3284 11 15 11.6716 15 12.5V13.5C15 14.3284 14.3284 15 13.5 15H10.5V17.5C10.5 17.7761 10.2761 18 10 18C9.72386 18 9.5 17.7761 9.5 17.5V15H6.5C5.67157 15 5 14.3284 5 13.5V12.5C5 11.6716 5.67157 11 6.5 11H9.5V9H4.5C3.67157 9 3 8.32843 3 7.5V6.5C3 5.67157 3.67157 5 4.5 5H9.5V2.5C9.5 2.22386 9.72386 2 10 2Z" />
				</svg>
			);
	}
};

IconAlignHorizontalCenterFilled.iconName = "align-horizontal-center--filled";

export default IconAlignHorizontalCenterFilled;
