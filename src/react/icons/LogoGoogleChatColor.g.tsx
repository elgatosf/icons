import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleChatColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
	const iconSize = sizeMap[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={iconSize}
			height={iconSize}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="#EA4335" d="M21.4997 6.925L19.3747 7.34999L17.0747 6.925L16.5747 4.57499L17.0747 2.5L21.4997 6.925Z" /><path fill="#34A853" d="M17.075 6.92493V13.7249H9.20001L6.925 15.9999L6.625 17.0499L6.925 18.1499V20.7749C6.925 21.3999 7.70001 21.7249 8.15001 21.2749L11.275 18.1499H20.2C20.925 18.1499 21.5 17.5749 21.5 16.8499V6.92493H17.075Z" /><path fill="#4285F4" d="M6.925 13.725L4.55001 14.0499L2.5 13.725V6.92494L4.72499 6.57495L6.925 6.92494V13.725Z" /><path fill="#1967D2" d="M6.925 6.925H2.5V3.80001C2.5 3.07499 3.07499 2.5 3.80001 2.5H6.925L7.32501 4.6L6.925 6.925Z" /><path fill="#188038" d="M6.925 13.725V18.15H3.80001C3.07499 18.15 2.5 17.575 2.5 16.85V13.725H6.925Z" /><path fill="#FBBC04" d="M17.0748 2.5H6.9248V6.925H17.0748V2.5Z" />
		</svg>
	);
};

LogoGoogleChatColor.iconName = "logo-google-chat--color";

export default LogoGoogleChatColor;