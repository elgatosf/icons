import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAnnounceFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.31149 7.01915C2.52372 7.308 2 8.05785 2 8.8969V10.1032C2 10.9422 2.52372 11.6921 3.31149 11.9809L14.3115 16.0142C15.6167 16.4928 17 15.5267 17 14.1365V4.86357C17 3.47338 15.6167 2.50724 14.3115 2.98582L3.31149 7.01915Z" />
			<path d="M5.5 15.0001V13.8485L8.5 14.9485V15.0001C8.5 15.8285 7.82843 16.5001 7 16.5001C6.17157 16.5001 5.5 15.8285 5.5 15.0001Z" />
		</svg>
	);
};

IconAnnounceFilled.iconName = "announce--filled";

export default IconAnnounceFilled;
