import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleAssistant = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14.4293 8.2061C14.4293 11.9145 11.423 14.9207 7.71464 14.9207C4.00625 14.9207 1 11.9145 1 8.2061C1 4.4977 4.00625 1.49146 7.71464 1.49146C11.423 1.49146 14.4293 4.4977 14.4293 8.2061Z" /><path d="M21.6353 10.2259C22.3889 10.2259 23.0001 9.61495 23.0001 8.86111C23.0001 8.10731 22.3889 7.49634 21.6353 7.49634C20.8817 7.49634 20.2705 8.10731 20.2705 8.86111C20.2705 9.61495 20.8817 10.2259 21.6353 10.2259Z" /><path d="M20.543 12.1912C20.543 13.6986 19.3211 14.9207 17.8135 14.9207C16.3058 14.9207 15.084 13.6986 15.084 12.1912C15.084 10.6837 16.3059 9.46167 17.8135 9.46167C19.3211 9.46167 20.543 10.6838 20.543 12.1912Z" /><path d="M17.8136 22.5086C19.6227 22.5086 21.089 21.0422 21.089 19.2333C21.089 17.4244 19.6227 15.9579 17.8136 15.9579C16.0044 15.9579 14.5381 17.4244 14.5381 19.2333C14.5381 21.0422 16.0044 22.5086 17.8136 22.5086Z" />
		</svg>
	);
};

LogoGoogleAssistant.iconName = "logo-google-assistant";

export default LogoGoogleAssistant;