import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPause = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M4 5C4 3.89543 4.89543 3 6 3H8C9.10457 3 10 3.89543 10 5V19C10 20.1046 9.10457 21 8 21H6C4.89543 21 4 20.1046 4 19V5ZM6 4.5H8C8.27614 4.5 8.5 4.72386 8.5 5V19C8.5 19.2761 8.27614 19.5 8 19.5H6C5.72386 19.5 5.5 19.2761 5.5 19V5C5.5 4.72386 5.72386 4.5 6 4.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M14 5C14 3.89543 14.8954 3 16 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H16C14.8954 21 14 20.1046 14 19V5ZM16 4.5H18C18.2761 4.5 18.5 4.72386 18.5 5V19C18.5 19.2761 18.2761 19.5 18 19.5H16C15.7239 19.5 15.5 19.2761 15.5 19V5C15.5 4.72386 15.7239 4.5 16 4.5Z"
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
						d="M4 4.5C4 3.67157 4.67157 3 5.5 3H6.5C7.32843 3 8 3.67157 8 4.5V15.5C8 16.3284 7.32843 17 6.5 17H5.5C4.67157 17 4 16.3284 4 15.5V4.5ZM5.5 4H6.5C6.77614 4 7 4.22386 7 4.5V15.5C7 15.7761 6.77614 16 6.5 16H5.5C5.22386 16 5 15.7761 5 15.5V4.5C5 4.22386 5.22386 4 5.5 4Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 4.5C12 3.67157 12.6716 3 13.5 3H14.5C15.3284 3 16 3.67157 16 4.5V15.5C16 16.3284 15.3284 17 14.5 17H13.5C12.6716 17 12 16.3284 12 15.5V4.5ZM13.5 4H14.5C14.7761 4 15 4.22386 15 4.5V15.5C15 15.7761 14.7761 16 14.5 16H13.5C13.2239 16 13 15.7761 13 15.5V4.5C13 4.22386 13.2239 4 13.5 4Z"
					/>
				</svg>
			);
	}
};

IconPause.iconName = "pause";

export default IconPause;
