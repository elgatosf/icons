import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.40091 3H1.99976V20.7001L9.40091 3Z" fill="#FA0C00" />
			<path d="M14.6082 3H21.9997V20.7001L14.6082 3Z" fill="#FA0C00" />
			<path d="M16.7151 20.7002L12.0044 9.52369L8.76913 17.1418H12.2166L13.6245 20.7002H16.7151Z" fill="#FA0C00" />
		</svg>
	);
};

IconLogoAdobeColor.iconName = "logo-adobe--color";

export default IconLogoAdobeColor;
