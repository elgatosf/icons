/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconHomeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3 8.978A2 2 0 0 1 3.772 7.4l7-5.444a2 2 0 0 1 2.456 0l7 5.444A2 2 0 0 1 21 8.98V19a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-6h-3v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		</svg>
	);
};

IconHomeFilled.iconName = "home--filled";

export default IconHomeFilled;
