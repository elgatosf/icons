/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconTextSize = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M14.803 4.474a.75.75 0 0 1 1.394 0l5.75 14.5a.75.75 0 1 1-1.394.552L18.956 15.5h-6.912l-1.596 4.025a.749.749 0 0 1-1.395.002L8.249 17.5H4.251l-.804 2.026a.75.75 0 0 1-1.394-.552l3.5-8.827a.75.75 0 0 1 1.394 0l2.803 7.068zM4.846 16h2.808L6.25 12.459zm13.515-2L15.5 6.785 12.639 14z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTextSize.iconName = "text-size";

export default IconTextSize;
