import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoBestBuyColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#FFF200" d="M5.43799 5H22.9199V19H5.43241L1.08008 14.9043V9.12913L5.43799 5Z" /><path fill="#1D252C" d="M4.56254 11.9916C4.56254 12.4715 4.17752 12.8565 3.69765 12.8565C3.21778 12.8565 2.83276 12.4715 2.83276 11.9916C2.83276 11.5117 3.21778 11.1267 3.69765 11.1267C4.17194 11.1267 4.56254 11.5173 4.56254 11.9916Z" />
		</svg>
	);
};

LogoBestBuyColor.iconName = "logo-best-buy--color";

export default LogoBestBuyColor;