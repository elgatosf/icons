import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ShieldOffFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2.21967 21.7803C1.92678 21.4874 1.92678 21.0126 2.21967 20.7197L20.7197 2.21967C21.0126 1.92678 21.4874 1.92678 21.7803 2.21967C22.0732 2.51256 22.0732 2.98744 21.7803 3.28033L19.1104 5.95026L19.9713 6.42854C20.6062 6.78128 21.0086 7.45386 20.9648 8.17887C20.469 16.3818 14.8743 20.3731 12.7827 21.5863C12.2932 21.8702 11.7069 21.8702 11.2173 21.5863C10.2651 21.034 8.58678 19.9058 6.99408 18.0666L3.28033 21.7803C2.98744 22.0732 2.51256 22.0732 2.21967 21.7803Z" /><path d="M5.22553 15.5954L16.3849 4.43607L12.9713 2.53965C12.3673 2.20407 11.6328 2.20407 11.0287 2.53965L4.02872 6.42854C3.39379 6.78128 2.99141 7.45386 3.03524 8.17887C3.2177 11.1976 4.0907 13.646 5.22553 15.5954Z" />
		</svg>
	);
};

ShieldOffFilled.iconName = "shield-off--filled";

export default ShieldOffFilled;