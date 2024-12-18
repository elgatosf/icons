import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const SpeakerSwitchToFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M13 7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5C11 6.94772 11.4477 6.5 12 6.5C12.5523 6.5 13 6.94772 13 7.5Z" /><path fillRule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V11.4982C19.2304 11.1772 18.3859 11 17.5 11C16.373 11 15.313 11.2868 14.389 11.7915C13.7223 11.2943 12.8955 11 12 11C9.79086 11 8 12.7909 8 15C8 16.9187 9.35088 18.5218 11.1534 18.9102C11.4152 20.0937 11.9996 21.1559 12.8096 22H6C4.89543 22 4 21.1046 4 20V4ZM12 10C13.3807 10 14.5 8.88071 14.5 7.5C14.5 6.11929 13.3807 5 12 5C10.6193 5 9.5 6.11929 9.5 7.5C9.5 8.88071 10.6193 10 12 10Z" clipRule="evenodd" /><path d="M12 12.5C12.3838 12.5 12.7475 12.5865 13.0725 12.7411C11.8444 13.8842 11.0593 15.4969 11.0032 17.2934C10.1185 16.9083 9.5 16.0264 9.5 15C9.5 13.6193 10.6193 12.5 12 12.5Z" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM18.8536 19.8536L20.8536 17.8536C21.0488 17.6583 21.0488 17.3417 20.8536 17.1464L18.8536 15.1464C18.6583 14.9512 18.3417 14.9512 18.1464 15.1464C17.9512 15.3417 17.9512 15.6583 18.1464 15.8536L19.2929 17H14.5C14.2239 17 14 17.2239 14 17.5C14 17.7761 14.2239 18 14.5 18H19.2929L18.1464 19.1464C17.9512 19.3417 17.9512 19.6583 18.1464 19.8536C18.3417 20.0488 18.6583 20.0488 18.8536 19.8536Z" clipRule="evenodd" />
		</svg>
	);
};

SpeakerSwitchToFilled.iconName = "speaker-switch-to--filled";

export default SpeakerSwitchToFilled;