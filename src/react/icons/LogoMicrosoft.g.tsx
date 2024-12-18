import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMicrosoft = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.5714 3H3V11.5714H11.5714V3Z" /><path d="M21 3H12.4286V11.5714H21V3Z" /><path d="M3 12.4286H11.5714V21H3V12.4286Z" /><path d="M21 12.4286H12.4286V21H21V12.4286Z" />
		</svg>
	);
};

LogoMicrosoft.iconName = "logo-microsoft";

export default LogoMicrosoft;