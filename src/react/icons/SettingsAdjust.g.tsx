import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSettingsAdjust = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16.5 7.625a.75.75 0 0 0 1.5 0V6.5h2.25a.75.75 0 0 0 0-1.5H18V3.875a.75.75 0 0 0-1.5 0V5H3.75a.75.75 0 1 0 0 1.5H16.5zM3 12a.75.75 0 0 1 .75-.75H6v-1.125a.75.75 0 0 1 1.5 0v1.125h12.75a.75.75 0 0 1 0 1.5H7.5v1.125a.75.75 0 0 1-1.5 0V12.75H3.75A.75.75 0 0 1 3 12M21 18.25a.75.75 0 0 1-.75.75H18v1.125a.75.75 0 0 1-1.5 0V19H3.75a.75.75 0 0 1 0-1.5H16.5v-1.125a.75.75 0 0 1 1.5 0V17.5h2.25a.75.75 0 0 1 .75.75" />
		</svg>
	);
};

IconSettingsAdjust.iconName = "settings-adjust";

export default IconSettingsAdjust;
