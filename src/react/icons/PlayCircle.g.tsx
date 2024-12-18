import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PlayCircle = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M16.2583 10.2677C17.5917 11.0375 17.5917 12.962 16.2583 13.7318L11 16.7677C9.66667 17.5375 8 16.5753 8 15.0357L8 8.96386C8 7.42426 9.66667 6.46201 11 7.23181L16.2583 10.2677ZM15.5083 12.4328L10.25 15.4687C9.91667 15.6611 9.5 15.4206 9.5 15.0357L9.5 8.96386C9.5 8.57896 9.91667 8.3384 10.25 8.53085L15.5083 11.5667C15.8417 11.7592 15.8417 12.2403 15.5083 12.4328Z" clipRule="evenodd" /><path fillRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z" clipRule="evenodd" />
		</svg>
	);
};

PlayCircle.iconName = "play-circle";

export default PlayCircle;