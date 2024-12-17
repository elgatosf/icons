import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWifi2 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10.469 13.805a4 4 0 0 1 4.359.867.75.75 0 0 0 1.06-1.061 5.5 5.5 0 0 0-7.778 0 .75.75 0 0 0 1.061 1.06 4 4 0 0 1 1.298-.866M12 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
		</svg>
	);
};

IconWifi2.iconName = "wifi-2";

export default IconWifi2;
