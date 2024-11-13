/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconAdjustVertical = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M4 8.75a3.75 3.75 0 0 0 3 3.675v8.825a.75.75 0 0 0 1.5 0v-8.825a3.751 3.751 0 0 0 0-7.35V2.75a.75.75 0 1 0-1.5 0v2.325A3.75 3.75 0 0 0 4 8.75m1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m7 6.5a3.75 3.75 0 0 1 3-3.675V2.75a.75.75 0 0 1 1.5 0v8.825a3.751 3.751 0 0 1 0 7.35v2.325a.75.75 0 0 1-1.5 0v-2.325a3.75 3.75 0 0 1-3-3.675m1.5 0a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconAdjustVertical.iconName = "adjust-vertical";

export default IconAdjustVertical;
