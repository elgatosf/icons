/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconWarning = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 12 8m0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
			<path
				fillRule="evenodd"
				d="M13.732 3.947c-.77-1.333-2.694-1.333-3.464 0L2.732 17c-.77 1.333.192 3 1.732 3h15.072c1.54 0 2.502-1.667 1.732-3zm6.237 13.803L12.433 4.697a.5.5 0 0 0-.866 0L4.03 17.75a.5.5 0 0 0 .433.75h15.072a.5.5 0 0 0 .433-.75Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconWarning.iconName = "warning";

export default IconWarning;
