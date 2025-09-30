import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHeadphonesFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5 15C5 13.8954 5.89543 13 7 13H8C9.10457 13 10 13.8954 10 15V20C10 21.1046 9.10457 22 8 22H7C5.89543 22 5 21.1046 5 20V15Z" />
					<path d="M16 13C14.8954 13 14 13.8954 14 15V20C14 21.1046 14.8954 22 16 22H17C18.1046 22 19 21.1046 19 20V15C19 13.8954 18.1046 13 17 13H16Z" />
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
					<path d="M4 12.5C4 11.6716 4.67157 11 5.5 11H6.5C7.32843 11 8 11.6716 8 12.5V16.5C8 17.3284 7.32843 18 6.5 18H5.5C4.67157 18 4 17.3284 4 16.5V12.5Z" />
					<path d="M13.5 11C12.6716 11 12 11.6716 12 12.5V16.5C12 17.3284 12.6716 18 13.5 18H14.5C15.3284 18 16 17.3284 16 16.5V12.5C16 11.6716 15.3284 11 14.5 11H13.5Z" />
				</svg>
			);
	}
};

IconHeadphonesFilled.iconName = "headphones--filled";

export default IconHeadphonesFilled;
