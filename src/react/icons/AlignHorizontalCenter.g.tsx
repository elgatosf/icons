import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignHorizontalCenter = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12.75 3.75C12.75 3.33579 12.4142 3 12 3C11.5858 3 11.25 3.33579 11.25 3.75V6H6C4.89543 6 4 6.89543 4 8V9C4 10.1046 4.89543 11 6 11H11.25V13H9C7.89543 13 7 13.8954 7 15V16C7 17.1046 7.89543 18 9 18H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V18H15C16.1046 18 17 17.1046 17 16V15C17 13.8954 16.1046 13 15 13H12.75V11H18C19.1046 11 20 10.1046 20 9V8C20 6.89543 19.1046 6 18 6H12.75V3.75ZM18.5 8C18.5 7.72386 18.2761 7.5 18 7.5H6C5.72386 7.5 5.5 7.72386 5.5 8V9C5.5 9.27614 5.72386 9.5 6 9.5H18C18.2761 9.5 18.5 9.27614 18.5 9V8ZM8.5 15C8.5 14.7239 8.72386 14.5 9 14.5H15C15.2761 14.5 15.5 14.7239 15.5 15V16C15.5 16.2761 15.2761 16.5 15 16.5H9C8.72386 16.5 8.5 16.2761 8.5 16V15Z"
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
						d="M10 2C10.2761 2 10.5 2.22386 10.5 2.5V5H15.5C16.3284 5 17 5.67157 17 6.5V7.5C17 8.32843 16.3284 9 15.5 9H10.5V11H13.5C14.3284 11 15 11.6716 15 12.5V13.5C15 14.3284 14.3284 15 13.5 15H10.5V17.5C10.5 17.7761 10.2761 18 10 18C9.72386 18 9.5 17.7761 9.5 17.5V15H6.5C5.67157 15 5 14.3284 5 13.5V12.5C5 11.6716 5.67157 11 6.5 11H9.5V9H4.5C3.67157 9 3 8.32843 3 7.5V6.5C3 5.67157 3.67157 5 4.5 5H9.5V2.5C9.5 2.22386 9.72386 2 10 2ZM4.5 6H15.5C15.7761 6 16 6.22386 16 6.5V7.5C16 7.77614 15.7761 8 15.5 8H4.5C4.22386 8 4 7.77614 4 7.5V6.5C4 6.22386 4.22386 6 4.5 6ZM6 12.5C6 12.2239 6.22386 12 6.5 12H13.5C13.7761 12 14 12.2239 14 12.5V13.5C14 13.7761 13.7761 14 13.5 14H6.5C6.22386 14 6 13.7761 6 13.5V12.5Z"
					/>
				</svg>
			);
	}
};

IconAlignHorizontalCenter.iconName = "align-horizontal-center";

export default IconAlignHorizontalCenter;
