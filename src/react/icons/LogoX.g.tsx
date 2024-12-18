import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoX = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M17.0899 4H19.8042L13.8743 10.7774L20.8503 20H15.3882L11.11 14.4066L6.21485 20H3.49895L9.84152 12.7508L3.14941 4H8.75023L12.6173 9.11262L17.0899 4ZM16.1373 18.3754H17.6413L7.933 5.53928H6.31906L16.1373 18.3754Z" />
		</svg>
	);
};

LogoX.iconName = "logo-x";

export default LogoX;