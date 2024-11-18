import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoCameraHubFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
			<path
				fillRule="evenodd"
				d="M6.862 9.294c.1-.416.522-.794 1.17-.794h7.937c.647 0 1.069.378 1.17.794.198.816.361 1.778.361 2.706s-.163 1.89-.361 2.706c-.101.416-.523.794-1.17.794H8.03c-.647 0-1.068-.378-1.17-.794a13 13 0 0 1-.328-1.956H7.75a.75.75 0 0 0 0-1.5H6.533c.057-.683.184-1.359.329-1.956M9.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M5.404 8.94C5.694 7.748 6.804 7 8.03 7h7.938c1.227 0 2.338.748 2.627 1.94.214.882.404 1.971.404 3.06s-.19 2.178-.404 3.06c-.29 1.192-1.4 1.94-2.627 1.94H8.03c-1.227 0-2.338-.748-2.627-1.94C5.19 14.178 5 13.089 5 12s.19-2.178.404-3.06"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoCameraHubFilled.iconName = "logo-camera-hub--filled";

export default IconLogoCameraHubFilled;
