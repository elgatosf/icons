import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const RingLightOffFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M2.21967 21.7803C1.92678 21.4874 1.92678 21.0126 2.21967 20.7197L20.7197 2.21967C21.0126 1.92678 21.4874 1.92678 21.7803 2.21967C22.0732 2.51256 22.0732 2.98744 21.7803 3.28033L18.9773 6.08336C19.6285 7.24102 20 8.57713 20 10C20 14.1654 16.8166 17.5872 12.75 17.9653V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V17.9653C10.1078 17.8591 9.03525 17.5128 8.08336 16.9773L3.28033 21.7803C2.98744 22.0732 2.51256 22.0732 2.21967 21.7803ZM12.5671 12.4935L12.5718 12.4945C13.0005 12.5856 13.3908 12.8113 13.8874 13.0986L16.5539 14.6381C17.755 13.4587 18.5 11.8164 18.5 10C18.5 8.99559 18.2722 8.04439 17.8654 7.19525L12.5671 12.4935Z" clipRule="evenodd" /><path d="M5.78423 15.0367L6.85201 13.9689C6.0043 12.871 5.5 11.4944 5.5 10C5.5 6.41015 8.41015 3.5 12 3.5C13.4944 3.5 14.871 4.0043 15.9689 4.85201L17.0367 3.78423C15.6615 2.66853 13.9088 2 12 2C7.58172 2 4 5.58172 4 10C4 11.9088 4.66853 13.6615 5.78423 15.0367Z" />
		</svg>
	);
};

RingLightOffFilled.iconName = "ring-light-off--filled";

export default RingLightOffFilled;