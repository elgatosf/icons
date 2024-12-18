import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CheckmarkCircle = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z" clipRule="evenodd" /><path d="M16.7803 8.71967C17.0732 9.01256 17.0732 9.48744 16.7803 9.78033L10.7803 15.7803C10.4874 16.0732 10.0126 16.0732 9.71967 15.7803L6.71967 12.7803C6.42678 12.4874 6.42678 12.0126 6.71967 11.7197C7.01256 11.4268 7.48744 11.4268 7.78033 11.7197L10.25 14.1893L15.7197 8.71967C16.0126 8.42678 16.4874 8.42678 16.7803 8.71967Z" />
		</svg>
	);
};

CheckmarkCircle.iconName = "checkmark-circle";

export default CheckmarkCircle;