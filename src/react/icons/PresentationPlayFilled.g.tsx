import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PresentationPlayFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M1.75 3C1.33579 3 1 3.33579 1 3.75C1 4.16421 1.33579 4.5 1.75 4.5H3V15C3 16.1046 3.89543 17 5 17H11.25V17.9393L8.46967 20.7197C8.17678 21.0126 8.17678 21.4874 8.46967 21.7803C8.76256 22.0732 9.23744 22.0732 9.53033 21.7803L12 19.3107L14.4697 21.7803C14.7626 22.0732 15.2374 22.0732 15.5303 21.7803C15.8232 21.4874 15.8232 21.0126 15.5303 20.7197L12.75 17.9393V17H19C20.1046 17 21 16.1046 21 15V4.5H22.25C22.6642 4.5 23 4.16421 23 3.75C23 3.33579 22.6642 3 22.25 3H1.75ZM15.25 11.299C16.25 10.7217 16.25 9.27831 15.25 8.70096L10.75 6.10289C9.75 5.52554 8.5 6.24722 8.5 7.40192L8.5 12.5981C8.5 13.7528 9.75 14.4745 10.75 13.8971L15.25 11.299Z" clipRule="evenodd" />
		</svg>
	);
};

PresentationPlayFilled.iconName = "presentation-play--filled";

export default PresentationPlayFilled;