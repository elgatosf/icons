import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleChat = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3.80001 2.5C3.07499 2.5 2.5 3.07499 2.5 3.80001V16.85C2.5 17.575 3.07499 18.15 3.80001 18.15H6.925V20.7749C6.925 21.3999 7.70001 21.7249 8.15001 21.2749L11.275 18.1499H20.2C20.925 18.1499 21.5 17.5749 21.5 16.8499V6.92493L17.0748 2.50011L3.80001 2.5ZM17.0747 6.925L6.925 6.925L6.925 15.9999L9.20001 13.7249H17.075L17.0747 6.925Z" clipRule="evenodd" />
		</svg>
	);
};

LogoGoogleChat.iconName = "logo-google-chat";

export default LogoGoogleChat;