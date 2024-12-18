import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGamerSensei = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21 21H3V3H21V5.00001H4.99999V19.0001H19V9.00004H8.99998V11.0001H17V17.0001H7V15.0001H15V13.0001H7V7.00003H21V21Z" />
		</svg>
	);
};

LogoGamerSensei.iconName = "logo-gamer-sensei";

export default LogoGamerSensei;