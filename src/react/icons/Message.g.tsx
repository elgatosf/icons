import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Message = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8 10.25C8 9.83579 8.33579 9.5 8.75 9.5H15.25C15.6642 9.5 16 9.83579 16 10.25C16 10.6642 15.6642 11 15.25 11H8.75C8.33579 11 8 10.6642 8 10.25Z" /><path d="M8.75 13C8.33579 13 8 13.3358 8 13.75C8 14.1642 8.33579 14.5 8.75 14.5H13.25C13.6642 14.5 14 14.1642 14 13.75C14 13.3358 13.6642 13 13.25 13H8.75Z" /><path fillRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C10.3461 22 8.786 21.5985 7.41182 20.8877L3.18829 22.0395C2.44179 22.2431 1.75682 21.5582 1.96041 20.8117L3.11228 16.5881C2.40145 15.214 1.99996 13.6539 1.99996 12C1.99996 6.47715 6.47711 2 12 2C17.5228 2 22 6.47715 22 12ZM4.71334 16.4185L3.63779 20.3622L7.58147 19.2866L8.101 19.5554C9.26718 20.1586 10.5915 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30554 3.5 3.49996 7.30558 3.49996 12C3.49996 13.4085 3.84135 14.7328 4.44459 15.899L4.71334 16.4185Z" clipRule="evenodd" />
		</svg>
	);
};

Message.iconName = "message";

export default Message;