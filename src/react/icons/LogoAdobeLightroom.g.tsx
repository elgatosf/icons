import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeLightroom = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.7715 3C19.5543 3 21 4.44568 21 6.22852V17.7715C21 19.5543 19.5543 21 17.7715 21H6.22852C4.44568 21 3 19.5543 3 17.7715V6.22852C3 4.44568 4.44568 3 6.22852 3H17.7715ZM6.98926 7.77832V16.0762H13.1074V14.1064H9.29297V7.77832H6.98926ZM16.5381 9.5C15.4112 9.5 14.6308 9.69818 13.8506 10.0449V16.0762H16.0176V11.3701C16.2529 11.2834 16.5134 11.2461 16.9717 11.2461C17.2067 11.2461 17.4911 11.2706 17.6396 11.3076V9.62305C17.4537 9.56118 17.0454 9.50003 16.5381 9.5Z"
			/>
		</svg>
	);
};

IconLogoAdobeLightroom.iconName = "logo-adobe-lightroom";

export default IconLogoAdobeLightroom;
