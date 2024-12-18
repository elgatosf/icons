import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CameraFramePresetFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2.75 2C2.33579 2 2 2.33579 2 2.75V5.25C2 5.66421 2.33579 6 2.75 6C3.16421 6 3.5 5.66421 3.5 5.25V3.5H5.25C5.66421 3.5 6 3.16421 6 2.75C6 2.33579 5.66421 2 5.25 2H2.75Z" /><path d="M2 18.75V21.25C2 21.4489 2.07902 21.6397 2.21967 21.7803C2.36032 21.921 2.55109 22 2.75 22H5.25C5.66421 22 6 21.6642 6 21.25C6 20.8358 5.66421 20.5 5.25 20.5H3.5L3.5 18.75C3.5 18.3358 3.16421 18 2.75 18C2.33579 18 2 18.3358 2 18.75Z" /><path d="M18.75 22H21.25C21.4489 22 21.6397 21.921 21.7803 21.7803C21.921 21.6397 22 21.4489 22 21.25V18.75C22 18.3358 21.6642 18 21.25 18C20.8358 18 20.5 18.3358 20.5 18.75V20.5H18.75C18.3358 20.5 18 20.8358 18 21.25C18 21.6642 18.3358 22 18.75 22Z" /><path d="M22 5.25V2.75C22 2.33579 21.6642 2 21.25 2H18.75C18.3358 2 18 2.33579 18 2.75C18 3.16421 18.3358 3.5 18.75 3.5L20.5 3.5V5.25C20.5 5.66421 20.8358 6 21.25 6C21.6642 6 22 5.66421 22 5.25Z" /><path fillRule="evenodd" d="M5 7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7ZM15 6.5H17C17.2761 6.5 17.5 6.72386 17.5 7V17C17.5 17.2761 17.2761 17.5 17 17.5H7C6.72386 17.5 6.5 17.2761 6.5 17V15H13C14.1046 15 15 14.1046 15 13V6.5Z" clipRule="evenodd" />
		</svg>
	);
};

CameraFramePresetFilled.iconName = "camera-frame-preset--filled";

export default CameraFramePresetFilled;