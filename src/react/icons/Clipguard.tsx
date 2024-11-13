/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconClipguard = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.25 3.5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0zM5.75 5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V5.75A.75.75 0 0 1 5.75 5m-3 3a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 2.75 8m6 0a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 8.75 8m8.75 6.25a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.5 0zm-2.25-3.5a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m5.25.75a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0zM12 6.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75m0 10.5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75m.75 3.25a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 1.5 0zM12 10.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75" />
		</svg>
	);
};

IconClipguard.iconName = "clipguard";

export default IconClipguard;
