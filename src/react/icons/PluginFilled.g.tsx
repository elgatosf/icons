import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPluginFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4 8a2 2 0 0 1 2-2h2.5a.5.5 0 0 0 .5-.5V5a3 3 0 1 1 6 0v.5a.5.5 0 0 0 .5.5H18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2h.5a2 2 0 1 0 0-4H6a2 2 0 0 1-2-2z" />
		</svg>
	);
};

IconPluginFilled.iconName = "plugin--filled";

export default IconPluginFilled;
