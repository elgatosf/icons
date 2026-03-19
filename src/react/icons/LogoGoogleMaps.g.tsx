import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleMaps = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path d="M12.0001 2C16.3308 2 19.841 5.51023 19.841 9.84091C19.841 11.4489 19.3569 12.9443 18.5262 14.1886C16.883 16.65 14.3137 18.5 12.9899 21.1466L12.8149 21.4955C12.6467 21.8318 12.3228 22 11.999 22C11.6751 22 11.3524 21.8318 11.1842 21.4955L11.0092 21.1466C9.68532 18.5 7.11713 16.65 5.47395 14.1886C4.64327 12.9443 4.15918 11.4489 4.15918 9.84091C4.15918 5.51023 7.66941 2 12.0001 2ZM12.0001 5.63523C9.6785 5.63523 7.79554 7.51818 7.79554 9.83977C7.79554 12.1614 9.67736 14.0443 12.0001 14.0443C14.3217 14.0443 16.2046 12.1614 16.2046 9.83977C16.2046 7.51818 14.3217 5.63523 12.0001 5.63523Z" />
		</svg>
	);
};

IconLogoGoogleMaps.iconName = "logo-google-maps";

export default IconLogoGoogleMaps;
