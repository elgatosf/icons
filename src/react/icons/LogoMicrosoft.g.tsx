import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoft = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.5714 3H3V11.5714H11.5714V3Z" />
			<path d="M21 3H12.4286V11.5714H21V3Z" />
			<path d="M3 12.4286H11.5714V21H3V12.4286Z" />
			<path d="M21 12.4286H12.4286V21H21V12.4286Z" />
		</svg>
	);
};

IconLogoMicrosoft.iconName = "logo-microsoft";

export default IconLogoMicrosoft;
