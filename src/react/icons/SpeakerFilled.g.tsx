import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const SpeakerFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 8.5C12.5523 8.5 13 8.05228 13 7.5C13 6.94772 12.5523 6.5 12 6.5C11.4477 6.5 11 6.94772 11 7.5C11 8.05228 11.4477 8.5 12 8.5Z" /><path d="M14.5 15C14.5 16.3807 13.3807 17.5 12 17.5C10.6193 17.5 9.5 16.3807 9.5 15C9.5 13.6193 10.6193 12.5 12 12.5C13.3807 12.5 14.5 13.6193 14.5 15Z" /><path fillRule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM12 10C13.3807 10 14.5 8.88071 14.5 7.5C14.5 6.11929 13.3807 5 12 5C10.6193 5 9.5 6.11929 9.5 7.5C9.5 8.88071 10.6193 10 12 10ZM16 15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15Z" clipRule="evenodd" />
		</svg>
	);
};

SpeakerFilled.iconName = "speaker--filled";

export default SpeakerFilled;