import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleSitesColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				d="M18.5 23H5.5C4.67125 23 4 22.3288 4 21.5V2.5C4 1.67125 4.67125 1 5.5 1H14.5L20 6.5V21.5C20 22.3288 19.3287 23 18.5 23Z"
				fill="#4758B5"
			/>
			<path d="M14.5 1L20 6.5H14.5V1Z" fill="#354287" />
			<path d="M16.5 9.5H7.5V10.75H16.5V9.5Z" fill="white" />
			<path d="M16.5 12H15.25V16.25H16.5V12Z" fill="white" />
			<path d="M14 12H7.5V16.25H14V12Z" fill="white" />
		</svg>
	);
};

IconLogoGoogleSitesColor.iconName = "logo-google-sites--color";

export default IconLogoGoogleSitesColor;
