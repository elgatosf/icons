import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Camera = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8ZM12 9.5C13.933 9.5 15.5 11.067 15.5 13C15.5 14.933 13.933 16.5 12 16.5C10.067 16.5 8.5 14.933 8.5 13C8.5 11.067 10.067 9.5 12 9.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M15.2969 3.4453L17 6H20C21.1046 6 22 6.89543 22 8V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V8C2 6.89543 2.89543 6 4 6H7L8.70313 3.4453C8.8886 3.1671 9.20083 3 9.53518 3H14.4648C14.7992 3 15.1114 3.1671 15.2969 3.4453ZM7 7.5C7.50153 7.5 7.96988 7.24935 8.24808 6.83205L9.80278 4.5H14.1972L15.7519 6.83205C16.0301 7.24935 16.4985 7.5 17 7.5H20C20.2761 7.5 20.5 7.72386 20.5 8V19C20.5 19.2761 20.2761 19.5 20 19.5H4C3.72386 19.5 3.5 19.2761 3.5 19V8C3.5 7.72386 3.72386 7.5 4 7.5H7Z" clipRule="evenodd" />
		</svg>
	);
};

Camera.iconName = "camera";

export default Camera;