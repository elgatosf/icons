import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const HeadphonesSwitchTo = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6041 3.5 20.3532 7.16054 20.4958 11.73C21.0485 12.0175 21.5546 12.3821 22 12.8096V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12V17.25C2 17.6642 2.33579 18 2.75 18C3.16421 18 3.5 17.6642 3.5 17.25V12Z" /><path fillRule="evenodd" d="M5 15C5 13.8954 5.89543 13 7 13H8C9.10457 13 10 13.8954 10 15V20C10 21.1046 9.10457 22 8 22H7C5.89543 22 5 21.1046 5 20V15ZM7 14.5H8C8.27614 14.5 8.5 14.7239 8.5 15V20C8.5 20.2761 8.27614 20.5 8 20.5H7C6.72386 20.5 6.5 20.2761 6.5 20V15C6.5 14.7239 6.72386 14.5 7 14.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM18.8536 19.8536L20.8536 17.8536C21.0488 17.6583 21.0488 17.3417 20.8536 17.1464L18.8536 15.1464C18.6583 14.9512 18.3417 14.9512 18.1464 15.1464C17.9512 15.3417 17.9512 15.6583 18.1464 15.8536L19.2929 17H14.5C14.2239 17 14 17.2239 14 17.5C14 17.7761 14.2239 18 14.5 18H19.2929L18.1464 19.1464C17.9512 19.3417 17.9512 19.6583 18.1464 19.8536C18.3417 20.0488 18.6583 20.0488 18.8536 19.8536Z" clipRule="evenodd" />
		</svg>
	);
};

HeadphonesSwitchTo.iconName = "headphones-switch-to";

export default HeadphonesSwitchTo;