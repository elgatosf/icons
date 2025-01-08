import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoBestBuy = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M22.92 5H5.438L1.08 9.13v5.774L5.433 19H22.92zM3.698 12.857c.48 0 .865-.385.865-.865a.87.87 0 0 0-.865-.865.86.86 0 0 0-.865.865c0 .48.385.864.865.864"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoBestBuy.iconName = "logo-best-buy";

export default IconLogoBestBuy;
