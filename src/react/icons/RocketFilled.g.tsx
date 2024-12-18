import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const RocketFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M20.7124 2C16.2365 2 11.9919 3.9881 9.12644 7.4266L8.6486 8H4.3818C3.9019 8 3.45096 8.22963 3.1687 8.61774L1.93405 10.3154C1.37558 11.0833 1.66206 12.1703 2.52645 12.5632L6.46471 14.3533L9.65901 11.159C10.5377 10.2803 11.9623 10.2803 12.841 11.159C13.7197 12.0377 13.7197 13.4623 12.841 14.341L9.64665 17.5353L11.4367 21.4734C11.8296 22.3378 12.9166 22.6243 13.6845 22.0658L15.3821 20.8312C15.7703 20.5489 15.9999 20.098 15.9999 19.6181V15.3513L16.5733 14.8734C20.0118 12.008 21.9999 7.76335 21.9999 3.28744C21.9999 2.5764 21.4235 2 20.7124 2Z" /><path d="M11.7803 13.2803C12.0732 12.9874 12.0732 12.5126 11.7803 12.2197C11.4874 11.9268 11.0126 11.9268 10.7197 12.2197L5.21967 17.7197C4.92678 18.0126 4.92678 18.4874 5.21967 18.7803C5.51256 19.0732 5.98744 19.0732 6.28033 18.7803L11.7803 13.2803Z" />
		</svg>
	);
};

RocketFilled.iconName = "rocket--filled";

export default RocketFilled;