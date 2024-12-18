import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Crossfade = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21.25 5C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H19.2836C17.4934 6.5 15.8267 7.41217 14.8617 8.91997L10.4017 15.8886C9.16103 17.8272 7.01804 19 4.71641 19H2.75C2.33579 19 2 18.6642 2 18.25C2 17.8358 2.33579 17.5 2.75 17.5H4.71641C6.50656 17.5 8.17334 16.5878 9.13833 15.08L13.5983 8.11139C14.839 6.17279 16.982 5 19.2836 5H21.25Z" /><path d="M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H4.71641C6.50656 6.5 8.17334 7.41217 9.13833 8.91997L9.5874 9.62164C9.81068 9.97052 10.2745 10.0723 10.6234 9.84905C10.9723 9.62577 11.0741 9.16194 10.8508 8.81306L10.4017 8.11139C9.16103 6.17279 7.01804 5 4.71641 5H2.75Z" /><path d="M14.4126 14.3784C14.1893 14.0295 13.7255 13.9277 13.3766 14.151C13.0277 14.3742 12.9259 14.8381 13.1492 15.1869L13.5983 15.8886C14.839 17.8272 16.982 19 19.2836 19H21.25C21.6642 19 22 18.6642 22 18.25C22 17.8358 21.6642 17.5 21.25 17.5H19.2836C17.4934 17.5 15.8267 16.5878 14.8617 15.08L14.4126 14.3784Z" />
		</svg>
	);
};

Crossfade.iconName = "crossfade";

export default Crossfade;