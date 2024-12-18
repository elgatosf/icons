import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CameraOffFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M2.21967 21.7803C1.92678 21.4874 1.92678 21.0126 2.21967 20.7197L20.7197 2.21967C21.0126 1.92678 21.4874 1.92678 21.7803 2.21967C22.0732 2.51256 22.0732 2.98744 21.7803 3.28033L19.0607 6H20C21.1046 6 22 6.89543 22 8V19C22 20.1046 21.1046 21 20 21H4.06066L3.28033 21.7803C2.98744 22.0732 2.51256 22.0732 2.21967 21.7803ZM8.49493 16.5657C9.39724 17.4528 10.6347 18 12 18C14.7614 18 17 15.7614 17 13C17 11.6347 16.4528 10.3972 15.5657 9.49493L14.505 10.5556C15.1207 11.1865 15.5 12.0489 15.5 13C15.5 14.933 13.933 16.5 12 16.5C11.0489 16.5 10.1865 16.1207 9.55564 15.505L8.49493 16.5657Z" clipRule="evenodd" /><path d="M7.05786 13.7631L2 18.8209V8C2 6.89543 2.89543 6 4 6H7L8.70313 3.4453C8.8886 3.1671 9.20083 3 9.53518 3H14.4648C14.7992 3 15.1114 3.1671 15.2969 3.4453L16.1284 4.69256L12.7631 8.05786C12.5143 8.01976 12.2594 8 12 8C9.23858 8 7 10.2386 7 13C7 13.2594 7.01976 13.5143 7.05786 13.7631Z" />
		</svg>
	);
};

CameraOffFilled.iconName = "camera-off--filled";

export default CameraOffFilled;