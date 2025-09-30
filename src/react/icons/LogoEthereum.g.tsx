import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoEthereum = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M5.09375 12.1566L12 1L18.9063 12.1566L12 16.1085L5.09375 12.1566Z" />
			<path d="M12 23L5.17205 13.4876L12 17.4804L18.8279 13.4876L12 23Z" />
		</svg>
	);
};

IconLogoEthereum.iconName = "logo-ethereum";

export default IconLogoEthereum;
