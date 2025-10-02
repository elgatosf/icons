import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoCameraHubFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
					<path d="M8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11.6729 3C12.4578 3 13.2361 3.2907 13.6934 3.92871C14.5155 5.07577 15 6.48105 15 8C15 9.51895 14.5155 10.9242 13.6934 12.0713C13.2361 12.7093 12.4578 13 11.6729 13H4.32715L4.0332 12.9863C3.40094 12.9265 2.79857 12.6706 2.39551 12.1875L2.30664 12.0713C1.48453 10.9242 1 9.51895 1 8C1 6.57595 1.42562 5.25162 2.15625 4.14648L2.30664 3.92871C2.70666 3.37058 3.35226 3.07808 4.0332 3.01367L4.32715 3H11.6729ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5Z"
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
					<path d="M10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M14.4277 4.01172C15.0625 4.06747 15.6684 4.32138 16.084 4.80762C17.2782 6.20488 18 8.01779 18 10C18 11.9822 17.2782 13.7951 16.084 15.1924C15.6684 15.6786 15.0625 15.9325 14.4277 15.9883L14.1553 16H5.84473C5.15965 15.9999 4.48115 15.7784 4.00781 15.293L3.91602 15.1924C2.7218 13.7951 2 11.9822 2 10C2 8.1417 2.63401 6.43195 3.69727 5.07422L3.91602 4.80762C4.39079 4.25214 5.114 4.00008 5.84473 4H14.1553L14.4277 4.01172ZM10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z"
					/>
				</svg>
			);
	}
};

IconLogoCameraHubFilled.iconName = "logo-camera-hub--filled";

export default IconLogoCameraHubFilled;
