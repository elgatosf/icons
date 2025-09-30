import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoBestBuy = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.9199 5H5.43799L1.08008 9.12913V14.9043L5.43241 19H22.9199V5ZM3.69741 12.8565C4.17728 12.8565 4.56229 12.4715 4.56229 11.9916C4.56229 11.5173 4.1717 11.1267 3.69741 11.1267C3.21754 11.1267 2.83252 11.5117 2.83252 11.9916C2.83252 12.4715 3.21754 12.8565 3.69741 12.8565Z"
			/>
		</svg>
	);
};

IconLogoBestBuy.iconName = "logo-best-buy";

export default IconLogoBestBuy;
