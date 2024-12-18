import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CameraFramePresetCheckFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2.75 2C2.33579 2 2 2.33579 2 2.75V5.25C2 5.66421 2.33579 6 2.75 6C3.16421 6 3.5 5.66421 3.5 5.25V3.5H5.25C5.66421 3.5 6 3.16421 6 2.75C6 2.33579 5.66421 2 5.25 2H2.75Z" /><path d="M2 18.75V21.25C2 21.4489 2.07902 21.6397 2.21967 21.7803C2.36032 21.921 2.55109 22 2.75 22H5.25C5.66421 22 6 21.6642 6 21.25C6 20.8358 5.66421 20.5 5.25 20.5H3.5L3.5 18.75C3.5 18.3358 3.16421 18 2.75 18C2.33579 18 2 18.3358 2 18.75Z" /><path d="M22 5.25V2.75C22 2.33579 21.6642 2 21.25 2H18.75C18.3358 2 18 2.33579 18 2.75C18 3.16421 18.3358 3.5 18.75 3.5L20.5 3.5V5.25C20.5 5.66421 20.8358 6 21.25 6C21.6642 6 22 5.66421 22 5.25Z" /><path d="M15 6.5H17C17.2761 6.5 17.5 6.72386 17.5 7V11C18.0163 11 18.5185 11.0602 19 11.1739V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H11.1739C11.0602 18.5185 11 18.0163 11 17.5H7C6.72386 17.5 6.5 17.2761 6.5 17V15H11.4982C12.1568 13.4206 13.4206 12.1568 15 11.4982V6.5Z" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM20.3536 16.3536C20.5488 16.1583 20.5488 15.8417 20.3536 15.6464C20.1583 15.4512 19.8417 15.4512 19.6464 15.6464L16.5 18.7929L14.8536 17.1464C14.6583 16.9512 14.3417 16.9512 14.1464 17.1464C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536L16.1464 19.8536C16.2402 19.9473 16.3674 20 16.5 20C16.6326 20 16.7598 19.9473 16.8536 19.8536L20.3536 16.3536Z" clipRule="evenodd" />
		</svg>
	);
};

CameraFramePresetCheckFilled.iconName = "camera-frame-preset-check--filled";

export default CameraFramePresetCheckFilled;