import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleChatColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#EA4335" d="m21.5 6.925-2.125.425-2.3-.425-.5-2.35.5-2.075z" />
			<path
				fill="#34A853"
				d="M17.075 6.925v6.8H9.2L6.925 16l-.3 1.05.3 1.1v2.625c0 .625.775.95 1.225.5l3.125-3.125H20.2c.725 0 1.3-.575 1.3-1.3V6.925z"
			/>
			<path fill="#4285F4" d="m6.925 13.725-2.375.325-2.05-.325v-6.8l2.225-.35 2.2.35z" />
			<path fill="#1967D2" d="M6.925 6.925H2.5V3.8c0-.725.575-1.3 1.3-1.3h3.125l.4 2.1z" />
			<path fill="#188038" d="M6.925 13.725v4.425H3.8c-.725 0-1.3-.575-1.3-1.3v-3.125z" />
			<path fill="#FBBC04" d="M17.075 2.5H6.925v4.425h10.15z" />
		</svg>
	);
};

IconLogoGoogleChatColor.iconName = "logo-google-chat--color";

export default IconLogoGoogleChatColor;
