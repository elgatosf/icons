import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSettingsAdjustFocus = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 2.75A.75.75 0 0 1 2.75 2h2.5a.75.75 0 0 1 0 1.5H3.5v1.75a.75.75 0 0 1-1.5 0zM2 21.25v-2.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M22 5.25v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0M16.25 10a.75.75 0 0 1-.75-.75V8H5.75a.75.75 0 0 1 0-1.5h9.75V5.25a.75.75 0 0 1 1.5 0V6.5h1.25a.75.75 0 0 1 0 1.5H17v1.25a.75.75 0 0 1-.75.75M7.75 14.75A.75.75 0 0 0 8.5 14v-1.25h9.75a.75.75 0 0 0 0-1.5H8.5V10A.75.75 0 0 0 7 10v1.25H5.75a.75.75 0 0 0 0 1.5H7V14c0 .414.336.75.75.75M15.5 18.75a.75.75 0 0 0 1.5 0V17.5h1.25a.75.75 0 0 0 0-1.5H17v-1.25a.75.75 0 0 0-1.5 0V16H5.75a.75.75 0 0 0 0 1.5h9.75zM22 21.25v-2.5a.75.75 0 0 0-1.5 0v1.75h-1.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75" />
		</svg>
	);
};

IconSettingsAdjustFocus.iconName = "settings-adjust-focus";

export default IconSettingsAdjustFocus;
