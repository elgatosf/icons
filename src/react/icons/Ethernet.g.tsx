import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEthernet = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path d="M5.5 6C5.77614 6 6 6.22386 6 6.5V8.5C6 8.77614 5.77614 9 5.5 9C5.22386 9 5 8.77614 5 8.5V6.5C5 6.22386 5.22386 6 5.5 6Z" />
			<path d="M8.5 6C8.77614 6 9 6.22386 9 6.5V8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5V6.5C8 6.22386 8.22386 6 8.5 6Z" />
			<path d="M11.5 6C11.7761 6 12 6.22386 12 6.5V8.5C12 8.77614 11.7761 9 11.5 9C11.2239 9 11 8.77614 11 8.5V6.5C11 6.22386 11.2239 6 11.5 6Z" />
			<path d="M14.5 6C14.7761 6 15 6.22386 15 6.5V8.5C15 8.77614 14.7761 9 14.5 9C14.2239 9 14 8.77614 14 8.5V6.5C14 6.22386 14.2239 6 14.5 6Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15 4C16.1046 4 17 4.89543 17 6V13C17 14.1046 16.1046 15 15 15H14L12.5859 16.4141C12.2109 16.7891 11.7022 16.9999 11.1719 17H8.82812C8.2978 16.9999 7.78906 16.7891 7.41406 16.4141L6 15H5C3.89543 15 3 14.1046 3 13V6C3 4.89543 3.89543 4 5 4H15ZM5 5C4.48232 5 4.05621 5.39333 4.00488 5.89746L4 6V13C4 13.5523 4.44772 14 5 14H6C6.26522 14 6.51949 14.1054 6.70703 14.293L8.12109 15.707C8.30864 15.8946 8.56313 15.9999 8.82812 16H11.1719C11.4369 15.9999 11.6914 15.8946 11.8789 15.707L13.293 14.293L13.3662 14.2266C13.5442 14.0807 13.7679 14 14 14H15C15.5177 14 15.9438 13.6067 15.9951 13.1025L16 13V6C16 5.44772 15.5523 5 15 5H5Z"
			/>
		</svg>
	);
};

IconEthernet.iconName = "ethernet";

export default IconEthernet;
