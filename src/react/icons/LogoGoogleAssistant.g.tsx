import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleAssistant = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.43 8.206a6.715 6.715 0 1 1-13.43 0 6.715 6.715 0 0 1 13.43 0M21.635 10.226a1.365 1.365 0 1 0 0-2.73 1.365 1.365 0 0 0 0 2.73M20.543 12.191a2.73 2.73 0 1 1-5.459 0 2.73 2.73 0 0 1 5.459 0M17.814 22.509a3.275 3.275 0 1 0 0-6.55 3.275 3.275 0 0 0 0 6.55" />
		</svg>
	);
};

IconLogoGoogleAssistant.iconName = "logo-google-assistant";

export default IconLogoGoogleAssistant;
