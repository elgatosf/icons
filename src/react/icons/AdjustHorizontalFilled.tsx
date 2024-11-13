/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconAdjustHorizontalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.25 4a3.75 3.75 0 0 0-3.675 3H2.75a.75.75 0 0 0 0 1.5h8.825a3.751 3.751 0 0 0 7.35 0h2.325a.75.75 0 0 0 0-1.5h-2.325a3.75 3.75 0 0 0-3.675-3m-6.5 8.5a3.75 3.75 0 0 1 3.675 3h8.825a.75.75 0 0 1 0 1.5h-8.825a3.751 3.751 0 0 1-7.35 0H2.75a.75.75 0 0 1 0-1.5h2.325a3.75 3.75 0 0 1 3.675-3" />
		</svg>
	);
};

export default IconAdjustHorizontalFilled;
