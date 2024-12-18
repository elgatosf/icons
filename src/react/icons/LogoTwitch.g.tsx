import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoTwitch = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M17.25 6.12502H15.75V10.625H17.25V6.12502Z" /><path d="M11.6251 6.12502H13.1251V10.625H11.6251V6.12502Z" /><path fillRule="evenodd" d="M3 5.75L6.75 2H21V12.5L14.25 19.25H11.25L7.5 23V19.25H3V5.75ZM16.5 14.75L19.5 11.75V3.5H7.5L7.49993 14.75H10.8749V17.375L13.5 14.75L16.5 14.75Z" clipRule="evenodd" />
		</svg>
	);
};

LogoTwitch.iconName = "logo-twitch";

export default LogoTwitch;