import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHeadphones = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12V17.25C3.5 17.6642 3.16421 18 2.75 18C2.33579 18 2 17.6642 2 17.25V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V17.25C22 17.6642 21.6642 18 21.25 18C20.8358 18 20.5 17.6642 20.5 17.25V12C20.5 7.30558 16.6944 3.5 12 3.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7 13C5.89543 13 5 13.8954 5 15V20C5 21.1046 5.89543 22 7 22H8C9.10457 22 10 21.1046 10 20V15C10 13.8954 9.10457 13 8 13H7ZM8 14.5H7C6.72386 14.5 6.5 14.7239 6.5 15V20C6.5 20.2761 6.72386 20.5 7 20.5H8C8.27614 20.5 8.5 20.2761 8.5 20V15C8.5 14.7239 8.27614 14.5 8 14.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M14 15C14 13.8954 14.8954 13 16 13H17C18.1046 13 19 13.8954 19 15V20C19 21.1046 18.1046 22 17 22H16C14.8954 22 14 21.1046 14 20V15ZM16 14.5H17C17.2761 14.5 17.5 14.7239 17.5 15V20C17.5 20.2761 17.2761 20.5 17 20.5H16C15.7239 20.5 15.5 20.2761 15.5 20V15C15.5 14.7239 15.7239 14.5 16 14.5Z"
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
					<path d="M10 3C6.13401 3 3 6.13401 3 10V14.5C3 14.7761 2.77614 15 2.5 15C2.22386 15 2 14.7761 2 14.5V10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10V14.5C18 14.7761 17.7761 15 17.5 15C17.2239 15 17 14.7761 17 14.5V10C17 6.13401 13.866 3 10 3Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5.5 11C4.67157 11 4 11.6716 4 12.5V16.5C4 17.3284 4.67157 18 5.5 18H6.5C7.32843 18 8 17.3284 8 16.5V12.5C8 11.6716 7.32843 11 6.5 11H5.5ZM6.5 12H5.5C5.22386 12 5 12.2239 5 12.5V16.5C5 16.7761 5.22386 17 5.5 17H6.5C6.77614 17 7 16.7761 7 16.5V12.5C7 12.2239 6.77614 12 6.5 12Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 12.5C12 11.6716 12.6716 11 13.5 11H14.5C15.3284 11 16 11.6716 16 12.5V16.5C16 17.3284 15.3284 18 14.5 18H13.5C12.6716 18 12 17.3284 12 16.5V12.5ZM13.5 12H14.5C14.7761 12 15 12.2239 15 12.5V16.5C15 16.7761 14.7761 17 14.5 17H13.5C13.2239 17 13 16.7761 13 16.5V12.5C13 12.2239 13.2239 12 13.5 12Z"
					/>
				</svg>
			);
	}
};

IconHeadphones.iconName = "headphones";

export default IconHeadphones;
