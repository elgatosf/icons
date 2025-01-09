import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSettingsAdjustFocusCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.75 2a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V3.5h1.75a.75.75 0 0 0 0-1.5zM2 18.75v2.5a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 0-1.5H3.5v-1.75a.75.75 0 0 0-1.5 0M22 5.25v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0M15.5 9.25a.75.75 0 0 0 1.5 0V8h1.25a.75.75 0 0 0 0-1.5H17V5.25a.75.75 0 0 0-1.5 0V6.5H5.75a.75.75 0 1 0 0 1.5h9.75zM11.174 16A6.5 6.5 0 0 0 11 17.5H5.75a.75.75 0 0 1 0-1.5zM8.5 11.25h7.209a6.5 6.5 0 0 0-2.646 1.5H8.5V14A.75.75 0 0 1 7 14v-1.25H5.75a.75.75 0 0 1 0-1.5H7V10a.75.75 0 0 1 1.5 0z" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSettingsAdjustFocusCheck.iconName = "settings-adjust-focus-check";

export default IconSettingsAdjustFocusCheck;
