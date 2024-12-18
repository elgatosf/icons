import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ZoomIn = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.25 7.75C11.25 7.33579 10.9142 7 10.5 7C10.0858 7 9.75 7.33579 9.75 7.75V9.75H7.75C7.33579 9.75 7 10.0858 7 10.5C7 10.9142 7.33579 11.25 7.75 11.25H9.75V13.25C9.75 13.6642 10.0858 14 10.5 14C10.9142 14 11.25 13.6642 11.25 13.25V11.25H13.25C13.6642 11.25 14 10.9142 14 10.5C14 10.0858 13.6642 9.75 13.25 9.75H11.25V7.75Z" /><path fillRule="evenodd" d="M15.2465 16.3072C13.9536 17.3652 12.301 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.301 17.3652 13.9536 16.3072 15.2465L20.7803 19.7197C21.0732 20.0126 21.0732 20.4874 20.7803 20.7803C20.4874 21.0732 20.0126 21.0732 19.7197 20.7803L15.2465 16.3072ZM16.5 10.5C16.5 13.8137 13.8137 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5Z" clipRule="evenodd" />
		</svg>
	);
};

ZoomIn.iconName = "zoom-in";

export default ZoomIn;