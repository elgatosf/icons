import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const VideoFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.25 10.7011C17.25 11.2785 17.25 12.7219 16.25 13.2992L10.25 16.7633C9.25 17.3407 8 16.619 8 15.4643V8.53607C8 7.38136 9.25 6.65968 10.25 7.23703L16.25 10.7011Z" clipRule="evenodd" />
		</svg>
	);
};

VideoFilled.iconName = "video--filled";

export default VideoFilled;