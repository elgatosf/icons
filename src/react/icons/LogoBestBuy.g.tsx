import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoBestBuy = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M22.9201 5H5.43823L1.08032 9.12913V14.9043L5.43265 19H22.9201V5ZM3.69765 12.8565C4.17752 12.8565 4.56254 12.4715 4.56254 11.9916C4.56254 11.5173 4.17194 11.1267 3.69765 11.1267C3.21778 11.1267 2.83276 11.5117 2.83276 11.9916C2.83276 12.4715 3.21778 12.8565 3.69765 12.8565Z" clipRule="evenodd" />
		</svg>
	);
};

LogoBestBuy.iconName = "logo-best-buy";

export default LogoBestBuy;