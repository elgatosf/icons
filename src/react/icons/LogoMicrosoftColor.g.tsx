import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoMicrosoftColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#F35325" d="M3 3H11.6V11.6H3z" /><path fill="#05A6F0" d="M3 12.4H11.6V21H3z" /><path fill="#FFBA08" d="M12.4 12.4H21V21H12.4z" /><path fill="#81BC06" d="M12.4 3H21V11.6H12.4z" />
		</svg>
	);
};

LogoMicrosoftColor.iconName = "logo-microsoft--color";

export default LogoMicrosoftColor;