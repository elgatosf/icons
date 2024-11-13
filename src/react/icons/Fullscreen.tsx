/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFullscreen = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3 9.25a.75.75 0 0 0 1.5 0V5a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5H5a2 2 0 0 0-2 2zm18 5.5a.75.75 0 0 0-1.5 0V19a.5.5 0 0 1-.5.5h-4.25a.75.75 0 0 0 0 1.5H19a2 2 0 0 0 2-2zm-7-11a.75.75 0 0 1 .75-.75H19a2 2 0 0 1 2 2v4.25a.75.75 0 0 1-1.5 0V5a.5.5 0 0 0-.5-.5h-4.25a.75.75 0 0 1-.75-.75M9.25 21a.75.75 0 0 0 0-1.5H5a.5.5 0 0 1-.5-.5v-4.25a.75.75 0 0 0-1.5 0V19a2 2 0 0 0 2 2z" />
		</svg>
	);
};

export default IconFullscreen;
