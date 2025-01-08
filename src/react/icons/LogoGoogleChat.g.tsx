import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleChat = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M3.8 2.5c-.725 0-1.3.575-1.3 1.3v13.05c0 .725.575 1.3 1.3 1.3h3.125v2.625c0 .625.775.95 1.225.5l3.125-3.125H20.2c.725 0 1.3-.575 1.3-1.3V6.925L17.075 2.5zm13.275 4.425H6.925V16L9.2 13.725h7.875z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoGoogleChat.iconName = "logo-google-chat";

export default IconLogoGoogleChat;
