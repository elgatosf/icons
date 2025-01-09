import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWifiOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-2.715 2.716a13.5 13.5 0 0 1 2.48 1.958.75.75 0 0 1-1.06 1.06 12 12 0 0 0-2.515-1.923l-1.85 1.85a9.5 9.5 0 0 1 2.598 1.842.75.75 0 1 1-1.061 1.06 8 8 0 0 0-2.674-1.766l-2.01 2.01a5.5 5.5 0 0 1 2.916 1.524.75.75 0 0 1-1.06 1.06 4 4 0 0 0-3.296-1.144L3.28 21.78a.75.75 0 0 1-1.06 0M11.29 9.532l1.498-1.5a9.5 9.5 0 0 0-7.506 2.75.75.75 0 1 0 1.061 1.061 8 8 0 0 1 4.946-2.311M14.952 5.869l1.211-1.211A13.5 13.5 0 0 0 2.454 7.954a.75.75 0 0 0 1.06 1.06A12 12 0 0 1 14.953 5.87" />
			<path d="M12 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
		</svg>
	);
};

IconWifiOff.iconName = "wifi-off";

export default IconWifiOff;
