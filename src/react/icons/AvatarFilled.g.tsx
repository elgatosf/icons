import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAvatarFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM18.3635 17.6356C16.8063 19.3926 14.5326 20.5 12.0002 20.5C9.46775 20.5 7.19393 19.3925 5.63672 17.6354C6.43856 16.8337 7.38521 16.1902 8.42721 15.7395C9.54274 15.2571 10.7444 15.0055 11.9598 15.0001C13.1752 14.9947 14.3791 15.2355 15.4989 15.708C16.5697 16.1598 17.5424 16.8146 18.3635 17.6356Z"
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
						d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8ZM15.3622 14.5001C14.0781 16.0285 12.1526 17 10.0001 17C7.84775 17 5.92226 16.0286 4.63818 14.5002C5.24621 13.7757 5.9958 13.1807 6.84261 12.7527C7.81773 12.2598 8.89467 12.002 9.98727 12C11.0799 11.998 12.1578 12.2517 13.1347 12.741C13.9908 13.1697 14.7485 13.7688 15.3622 14.5001Z"
					/>
				</svg>
			);
	}
};

IconAvatarFilled.iconName = "avatar--filled";

export default IconAvatarFilled;
