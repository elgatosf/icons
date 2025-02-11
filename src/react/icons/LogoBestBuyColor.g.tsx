import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoBestBuyColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="#FFF200" d="M5.438 5H22.92v14H5.432L1.08 14.904V9.13z" />
			<path
				fill="#1D252C"
				d="M4.562 11.992c0 .48-.385.864-.865.864a.86.86 0 0 1-.864-.864c0-.48.385-.865.864-.865a.87.87 0 0 1 .865.865"
			/>
		</svg>
	);
};

IconLogoBestBuyColor.iconName = "logo-best-buy--color";

export default IconLogoBestBuyColor;
