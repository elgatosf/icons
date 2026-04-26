import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWebComponents = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M19.3877 7.76367L21.8213 11.9814L17.2852 19.9512H6.77734L2.17969 11.9814L6.77734 4.0127H11.7734L17.2607 4L19.3877 7.76367ZM14.3965 16.2119H9.61035L7.15723 11.9814L9.62988 7.76367H14.3711L16.8438 11.9814L14.3965 16.2119Z"
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
						d="M16.484 6.30329L18.6199 10.0051L14.6386 17H5.41612L1.38086 10.0051L5.41612 3.01114H9.80109L14.6172 3L16.484 6.30329ZM12.1033 13.7181H7.90259L5.74954 10.0051L7.91973 6.30329H12.081L14.2512 10.0051L12.1033 13.7181Z"
					/>
				</svg>
			);
	}
};

IconLogoWebComponents.iconName = "logo-web-components";

export default IconLogoWebComponents;
