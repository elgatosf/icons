import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWifi3 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.939 10.109a8 8 0 0 1 8.718 1.734.75.75 0 0 0 1.06-1.06 9.5 9.5 0 0 0-13.434 0 .75.75 0 1 0 1.06 1.06A8 8 0 0 1 8.94 10.11" />
			<path d="M12 13.5a4 4 0 0 0-2.828 1.172.75.75 0 1 1-1.061-1.061 5.5 5.5 0 0 1 7.778 0 .75.75 0 0 1-1.06 1.06A4 4 0 0 0 12 13.5M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
		</svg>
	);
};

IconWifi3.iconName = "wifi3";

export default IconWifi3;
