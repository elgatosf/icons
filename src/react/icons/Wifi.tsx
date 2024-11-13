/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconWifi = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.408 6.413a12 12 0 0 1 13.077 2.602.75.75 0 1 0 1.06-1.06 13.5 13.5 0 0 0-19.091 0 .75.75 0 0 0 1.06 1.06 12 12 0 0 1 3.894-2.602" />
			<path d="M12 9.5a8 8 0 0 0-5.657 2.343.75.75 0 0 1-1.06-1.06 9.5 9.5 0 0 1 13.434 0 .75.75 0 1 1-1.06 1.06A8 8 0 0 0 12 9.5" />
			<path d="M10.47 13.805a4 4 0 0 1 4.358.867.75.75 0 0 0 1.061-1.061 5.5 5.5 0 0 0-7.778 0 .75.75 0 0 0 1.06 1.06 4 4 0 0 1 1.298-.866ZM12 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
		</svg>
	);
};

IconWifi.iconName = "wifi";

export default IconWifi;
