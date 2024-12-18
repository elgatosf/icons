import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoTwitchColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="white" d="M19.5 11.75L16.5 14.75H13.5L10.875 17.375V14.75H7.5V3.5H19.5V11.75Z" /><path fill="#9146FF" d="M17.25 6.125H15.75V10.625H17.25V6.125Z" /><path fill="#9146FF" d="M11.625 6.125H13.125V10.625H11.625V6.125Z" /><path fill="#9146FF" fillRule="evenodd" d="M6.75 2L3 5.75V19.25H7.5V23L11.25 19.25H14.25L21 12.5V2H6.75ZM19.5 11.75L16.5 14.75H13.5L10.875 17.375V14.75H7.5V3.5H19.5V11.75Z" clipRule="evenodd" />
		</svg>
	);
};

LogoTwitchColor.iconName = "logo-twitch--color";

export default LogoTwitchColor;