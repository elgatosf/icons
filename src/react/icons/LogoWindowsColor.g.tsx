import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoWindowsColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#0078D4" d="M3 2.99988H11.532V11.5318H3V2.99988Z" /><path fill="#0078D4" d="M12.468 2.99996H21V11.5319H12.468V2.99996Z" /><path fill="#0078D4" d="M11.532 12.4688H3V21.0008H11.532V12.4688Z" /><path fill="#0078D4" d="M12.468 12.4688H21V21.0008H12.468V12.4688Z" />
		</svg>
	);
};

LogoWindowsColor.iconName = "logo-windows--color";

export default LogoWindowsColor;