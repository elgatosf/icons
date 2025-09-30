import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMusicFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.03449 5.03158L19.0178 2.03659C19.0575 2.02367 19.0987 2.01397 19.141 2.00781C19.3423 1.97801 19.5416 2.03224 19.6977 2.1482C19.7846 2.21275 19.8581 2.29643 19.9111 2.39539C19.9515 2.47062 19.9795 2.55355 19.9922 2.64141C19.9984 2.6836 20.001 2.72571 20 2.76735V15.5C20 17.433 18.433 19 16.5 19C14.567 19 13 17.433 13 15.5C13 13.567 14.567 12 16.5 12C17.2436 12 17.9331 12.2319 18.5 12.6273V3.75798L10 6.30798V18.4999C10 20.4329 8.433 22 6.5 22C4.567 22 3 20.4329 3 18.5C3 16.567 4.567 15 6.5 15C7.24362 15 7.93308 15.2319 8.5 15.6273V5.74995C8.5 5.41875 8.71725 5.12676 9.03449 5.03158Z" />
				</svg>
			);
		case "s":
			return (
				<svg
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M12.8011 1.10083C12.9264 1.19531 13 1.34311 13 1.5V11C13 12.1046 12.1046 13 11 13C9.89543 13 9 12.1046 9 11C9 9.89544 9.89543 9 11 9C11.3643 9 11.7058 9.0974 12 9.26757V2.16287L6 3.87716V13C6 14.1046 5.10457 15 4 15C2.89543 15 2 14.1046 2 13C2 11.8954 2.89543 11 4 11C4.36429 11 4.70583 11.0974 5 11.2676V3.5C5 3.27676 5.14799 3.08057 5.36264 3.01924L12.3626 1.01924C12.5135 0.97614 12.6758 1.00635 12.8011 1.10083Z" />
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
					<path d="M15.8077 2.1059C15.9291 2.20066 16 2.34604 16 2.5V13.5C16 14.8807 14.8807 16 13.5 16C12.1193 16 11 14.8807 11 13.5C11 12.1193 12.1193 11 13.5 11C14.0628 11 14.5822 11.186 15 11.4998V3.14039L8 4.89039V15.5C8 16.8807 6.88071 18 5.5 18C4.11929 18 3 16.8807 3 15.5C3 14.1193 4.11929 13 5.5 13C6.0628 13 6.58217 13.186 7 13.4998V4.5C7 4.27057 7.15615 4.07058 7.37873 4.01493L15.3787 2.01493C15.5281 1.97759 15.6863 2.01115 15.8077 2.1059Z" />
				</svg>
			);
	}
};

IconMusicFilled.iconName = "music--filled";

export default IconMusicFilled;
