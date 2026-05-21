import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconThumbDownFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M16 4L8.05518 4C6.25138 4 4.67074 5.20728 4.19613 6.94753L2.68897 12.4738C2.34199 13.746 3.29975 15 4.6185 15L10 15L10 18.6948C10 19.9679 11.0321 21 12.3052 21C13.3135 21 14.2048 20.3447 14.5055 19.3824L16 14.6L16 4Z" />
					<path d="M17.5 4L17.5 13L19 13C20.1046 13 21 12.1046 21 11L21 6C21 4.89543 20.1046 4 19 4L17.5 4Z" />
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
					<path d="M14 3.99806L15 3.99806C16.1046 3.99806 17 4.89351 17 5.99806L17 8.99806C17 10.1026 16.1046 10.9981 15 10.9981L14 10.9981L14 3.99806Z" />
					<path d="M10.8848 16.0752C10.2541 17.5886 8 17.1376 8 15.4981L8 12.9981L4.60644 12.9981C3.29139 12.9981 2.33444 11.7507 2.6748 10.4805L3.61719 6.9629C4.08573 5.21429 5.6702 3.99823 7.48047 3.99806L13 3.99806L13 10.9981L10.8848 16.0752Z" />
				</svg>
			);
	}
};

IconThumbDownFilled.iconName = "thumb-down--filled";

export default IconThumbDownFilled;
