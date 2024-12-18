import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const WaveMic = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V16C16 17.1046 15.1046 18 14 18H12.75V20.5H16.25C16.6642 20.5 17 20.8358 17 21.25C17 21.6642 16.6642 22 16.25 22L7.75 22C7.33579 22 7 21.6642 7 21.25C7 20.8358 7.33579 20.5 7.75 20.5H11.25V18H10C8.89543 18 8 17.1046 8 16V4ZM10 3.5H14C14.2761 3.5 14.5 3.72386 14.5 4V11L9.5 11V4C9.5 3.72386 9.72386 3.5 10 3.5ZM9.5 12.5V16C9.5 16.2761 9.72386 16.5 10 16.5H14C14.2761 16.5 14.5 16.2761 14.5 16V12.5L9.5 12.5Z" clipRule="evenodd" /><path d="M5.75 10C6.16421 10 6.5 10.3358 6.5 10.75L6.5 13.25C6.5 13.6642 6.16421 14 5.75 14C5.33579 14 5 13.6642 5 13.25V10.75C5 10.3358 5.33579 10 5.75 10Z" /><path d="M19 10.75C19 10.3358 18.6642 10 18.25 10C17.8358 10 17.5 10.3358 17.5 10.75V13.25C17.5 13.6642 17.8358 14 18.25 14C18.6642 14 19 13.6642 19 13.25V10.75Z" />
		</svg>
	);
};

WaveMic.iconName = "wave-mic";

export default WaveMic;