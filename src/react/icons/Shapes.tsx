/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconShapes = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M17 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8m2 3.5h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M15 13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM9 4.5H5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5M5 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm4.598 15.75L7.433 15a.5.5 0 0 0-.866 0l-2.165 3.75a.5.5 0 0 0 .433.75h4.33a.5.5 0 0 0 .433-.75m-.866-4.5c-.77-1.333-2.694-1.333-3.464 0L3.103 18c-.77 1.333.192 3 1.732 3h4.33c1.54 0 2.502-1.667 1.732-3z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconShapes.iconName = "shapes";

export default IconShapes;
