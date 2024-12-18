import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Shield = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4.02872 6.42866L11.0287 2.53977C11.6328 2.20419 12.3673 2.20419 12.9713 2.53977L19.9713 6.42866C20.6062 6.7814 21.0086 7.45398 20.9648 8.17899C20.469 16.3819 14.8743 20.3732 12.7827 21.5864C12.2932 21.8704 11.7069 21.8704 11.2173 21.5864C9.12574 20.3732 3.53104 16.3819 3.03524 8.17899C2.99141 7.45398 3.39379 6.7814 4.02872 6.42866ZM4.75719 7.7399L11.7572 3.85101C11.9082 3.76711 12.0918 3.76711 12.2428 3.85101L19.2428 7.7399C19.4172 7.83678 19.4736 7.98847 19.4675 8.08849C19.0163 15.5542 13.941 19.1804 12.0301 20.2889C12.0124 20.2992 12.0028 20.2994 12 20.2994C11.9973 20.2994 11.9877 20.2992 11.97 20.2889C10.059 19.1804 4.98375 15.5542 4.5325 8.08849C4.52646 7.98847 4.5828 7.83678 4.75719 7.7399Z" clipRule="evenodd" />
		</svg>
	);
};

Shield.iconName = "shield";

export default Shield;