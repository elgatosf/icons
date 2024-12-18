import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const SecurityFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11.0287 2.53977L4.02872 6.42866C3.39379 6.7814 2.99141 7.45398 3.03524 8.17899C3.53104 16.3819 9.12574 20.3732 11.2173 21.5864C11.7069 21.8704 12.2932 21.8704 12.7827 21.5864C14.8743 20.3732 20.469 16.3819 20.9648 8.17899C21.0086 7.45398 20.6062 6.7814 19.9713 6.42866L12.9713 2.53977C12.3673 2.20419 11.6328 2.20419 11.0287 2.53977ZM15.5303 10.2805C15.8232 9.98761 15.8232 9.51273 15.5303 9.21984C15.2374 8.92695 14.7626 8.92695 14.4697 9.21984L11 12.6895L9.53034 11.2198C9.23745 10.9269 8.76257 10.9269 8.46968 11.2198C8.17679 11.5127 8.17679 11.9876 8.46968 12.2805L10.4697 14.2805C10.7626 14.5734 11.2374 14.5734 11.5303 14.2805L15.5303 10.2805Z" clipRule="evenodd" />
		</svg>
	);
};

SecurityFilled.iconName = "security--filled";

export default SecurityFilled;