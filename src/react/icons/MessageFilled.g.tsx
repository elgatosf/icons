import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MessageFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47711 2 1.99996 6.47715 1.99996 12C1.99996 13.6539 2.40145 15.214 3.11228 16.5881L1.96041 20.8117C1.75682 21.5582 2.44179 22.2431 3.18829 22.0395L7.41182 20.8877C8.786 21.5985 10.3461 22 12 22ZM8 10.25C8 9.83579 8.33579 9.5 8.75 9.5H15.25C15.6642 9.5 16 9.83579 16 10.25C16 10.6642 15.6642 11 15.25 11H8.75C8.33579 11 8 10.6642 8 10.25ZM8.75 13C8.33579 13 8 13.3358 8 13.75C8 14.1642 8.33579 14.5 8.75 14.5H13.25C13.6642 14.5 14 14.1642 14 13.75C14 13.3358 13.6642 13 13.25 13H8.75Z" clipRule="evenodd" />
		</svg>
	);
};

MessageFilled.iconName = "message--filled";

export default MessageFilled;