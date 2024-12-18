import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ZoomOut = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7 10.5C7 10.0858 7.33579 9.75 7.75 9.75L13.25 9.75C13.6642 9.75 14 10.0858 14 10.5C14 10.9142 13.6642 11.25 13.25 11.25H7.75C7.33579 11.25 7 10.9142 7 10.5Z" /><path fillRule="evenodd" d="M16.3072 15.2465C17.3652 13.9536 18 12.301 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.301 18 13.9536 17.3652 15.2465 16.3072L19.7197 20.7803C20.0126 21.0732 20.4874 21.0732 20.7803 20.7803C21.0732 20.4874 21.0732 20.0126 20.7803 19.7197L16.3072 15.2465ZM10.5 16.5C13.8137 16.5 16.5 13.8137 16.5 10.5C16.5 7.18629 13.8137 4.5 10.5 4.5C7.18629 4.5 4.5 7.18629 4.5 10.5C4.5 13.8137 7.18629 16.5 10.5 16.5Z" clipRule="evenodd" />
		</svg>
	);
};

ZoomOut.iconName = "zoom-out";

export default ZoomOut;