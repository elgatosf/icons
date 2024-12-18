import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PlayCircleFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.2583 13.7318C17.5917 12.962 17.5917 11.0375 16.2583 10.2677L11 7.23181C9.66667 6.46201 8 7.42426 8 8.96386V15.0357C8 16.5753 9.66667 17.5375 11 16.7677L16.2583 13.7318Z" clipRule="evenodd" />
		</svg>
	);
};

PlayCircleFilled.iconName = "play-circle--filled";

export default PlayCircleFilled;