import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoAdobeExpress = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M6.03531 3H17.9653C19.7689 3 21.2311 4.46254 21.2311 6.26668V17.7333C21.2311 19.5375 19.7689 21 17.9653 21H6.03531C4.23167 21 2.76953 19.5375 2.76953 17.7333V6.26668C2.76953 4.46254 4.23167 3 6.03531 3ZM12.0187 6.98462C12.8572 6.98462 13.6125 7.48654 13.9388 8.25839L16.5927 14.5402C16.9562 15.3991 16.3273 16.3494 15.3944 16.3494C14.9545 16.3482 14.4552 16.1537 14.1931 15.5575L12.2833 11.0915C12.1808 10.849 11.8485 10.8505 11.7466 11.0929L10.8107 13.3237C10.7282 13.52 10.8717 13.7364 11.0843 13.7364C11.0843 13.7364 11.5563 13.7327 11.586 13.7327C12.3086 13.7327 12.8944 14.3194 12.8944 15.0414C12.8944 15.7634 12.3108 16.3486 11.5898 16.3501H8.6534C7.72268 16.3501 7.09378 15.4013 7.45506 14.5432L10.0918 8.26211C10.4174 7.48803 11.1802 6.98462 12.0187 6.98462Z" clipRule="evenodd" />
		</svg>
	);
};

LogoAdobeExpress.iconName = "logo-adobe-express";

export default LogoAdobeExpress;