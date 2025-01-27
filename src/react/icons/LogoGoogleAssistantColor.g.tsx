import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleAssistantColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="#4285F4" d="M7.715 14.92a6.715 6.715 0 1 0 0-13.429 6.715 6.715 0 0 0 0 13.43" />
			<path fill="#34A853" d="M23 8.861a1.365 1.365 0 1 1-2.73 0 1.365 1.365 0 0 1 2.73 0" />
			<path fill="#EA4335" d="M20.543 12.191a2.73 2.73 0 1 1-5.459 0 2.73 2.73 0 0 1 5.459 0" />
			<path fill="#FBBC05" d="M21.089 19.233a3.275 3.275 0 1 1-6.55 0 3.275 3.275 0 0 1 6.55 0" />
		</svg>
	);
};

IconLogoGoogleAssistantColor.iconName = "logo-google-assistant--color";

export default IconLogoGoogleAssistantColor;
