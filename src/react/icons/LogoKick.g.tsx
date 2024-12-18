import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoKick = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4 3H10.0001V6.99996H12.0001V4.99998H14.0001V3H20V8.99995H18V10.9999H16.0001V12.9999H18V14.9999H20V21H14.0001V19H12.0001V17H10.0001V21H4V3Z" clipRule="evenodd" />
		</svg>
	);
};

LogoKick.iconName = "logo-kick";

export default LogoKick;