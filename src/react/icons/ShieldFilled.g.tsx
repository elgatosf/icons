import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ShieldFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11.0287 2.53977L4.02872 6.42866C3.39379 6.7814 2.99141 7.45398 3.03524 8.17899C3.53104 16.3819 9.12574 20.3732 11.2173 21.5864C11.7069 21.8704 12.2932 21.8704 12.7827 21.5864C14.8743 20.3732 20.469 16.3819 20.9648 8.17899C21.0086 7.45398 20.6062 6.7814 19.9713 6.42866L12.9713 2.53977C12.3673 2.20419 11.6328 2.20419 11.0287 2.53977Z" clipRule="evenodd" />
		</svg>
	);
};

ShieldFilled.iconName = "shield--filled";

export default ShieldFilled;