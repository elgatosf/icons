import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ImageCheck = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 5V19C3 20.1046 3.89543 21 5 21H12.0218C11.7253 20.5368 11.4858 20.0335 11.3135 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V16.5607L9 12.0607L11.6346 14.6953C11.8579 14.2292 12.135 13.7939 12.4581 13.3974L9.53033 10.4697C9.23744 10.1768 8.76256 10.1768 8.46967 10.4697L4.5 14.4393V5C4.5 4.72386 4.72386 4.5 5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V11.3135C20.0335 11.4858 20.5368 11.7253 21 12.0218V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z" /><path fillRule="evenodd" d="M18 8.5C18 9.88071 16.8807 11 15.5 11C14.1193 11 13 9.88071 13 8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5ZM16.5 8.5C16.5 9.05228 16.0523 9.5 15.5 9.5C14.9477 9.5 14.5 9.05228 14.5 8.5C14.5 7.94772 14.9477 7.5 15.5 7.5C16.0523 7.5 16.5 7.94772 16.5 8.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM20.3536 16.3536C20.5488 16.1583 20.5488 15.8417 20.3536 15.6464C20.1583 15.4512 19.8417 15.4512 19.6464 15.6464L16.5 18.7929L14.8536 17.1464C14.6583 16.9512 14.3417 16.9512 14.1464 17.1464C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536L16.1464 19.8536C16.2402 19.9473 16.3674 20 16.5 20C16.6326 20 16.7598 19.9473 16.8536 19.8536L20.3536 16.3536Z" clipRule="evenodd" />
		</svg>
	);
};

ImageCheck.iconName = "image-check";

export default ImageCheck;