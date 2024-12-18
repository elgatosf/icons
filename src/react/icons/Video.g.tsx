import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Video = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M9.5 15.4641L15.5 12L9.5 8.53594L9.5 15.4641ZM16.25 13.2991C17.25 12.7217 17.25 11.2784 16.25 10.701L10.25 7.2369C9.25 6.65955 8 7.38124 8 8.53594V15.4641C8 16.6188 9.25 17.3405 10.25 16.7632L16.25 13.2991Z" clipRule="evenodd" />
		</svg>
	);
};

Video.iconName = "video";

export default Video;