import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Pin = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11.2197 2.21967C11.5126 1.92678 11.9874 1.92678 12.2803 2.21967L21.7803 11.7197C22.0732 12.0126 22.0732 12.4874 21.7803 12.7803C21.4874 13.0732 21.0126 13.0732 20.7197 12.7803L19.5 11.5607L12.5607 18.5L13.7803 19.7197C14.0732 20.0126 14.0732 20.4874 13.7803 20.7803C13.4874 21.0732 13.0126 21.0732 12.7197 20.7803L8.5 16.5607L4.28033 20.7803C3.98744 21.0732 3.51256 21.0732 3.21967 20.7803C2.92678 20.4874 2.92678 20.0126 3.21967 19.7197L7.43934 15.5L3.21967 11.2803C2.92678 10.9874 2.92678 10.5126 3.21967 10.2197C3.51256 9.92678 3.98744 9.92678 4.28033 10.2197L5.5 11.4393L12.4393 4.5L11.2197 3.28033C10.9268 2.98744 10.9268 2.51256 11.2197 2.21967ZM11.5 17.4393L18.4393 10.5L13.5 5.56066L6.56066 12.5L11.5 17.4393Z" clipRule="evenodd" />
		</svg>
	);
};

Pin.iconName = "pin";

export default Pin;