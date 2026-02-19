import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPanelSplitHorizontal = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 20 20"
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
				d="M16 4C17.1046 4 18 4.89543 18 6V14L17.9893 14.2041C17.887 15.2128 17.0357 16 16 16H4C2.96435 16 2.113 15.2128 2.01074 14.2041L2 14V6C2 4.89543 2.89543 4 4 4H16ZM3 10.5V14C3 14.5523 3.44772 15 4 15H16C16.5523 15 17 14.5523 17 14V10.5H3ZM4 5C3.44772 5 3 5.44772 3 6V9.5H17V6C17 5.44772 16.5523 5 16 5H4Z"
			/>
		</svg>
	);
};

IconPanelSplitHorizontal.iconName = "panel-split-horizontal";

export default IconPanelSplitHorizontal;
