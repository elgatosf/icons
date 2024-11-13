/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraFramePresetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.75 2a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V3.5h1.75a.75.75 0 0 0 0-1.5zM2 18.75v2.5a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 0-1.5H3.5v-1.75a.75.75 0 0 0-1.5 0M18.75 22h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v1.75h-1.75a.75.75 0 0 0 0 1.5M22 5.25v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0" />
			<path
				fillRule="evenodd"
				d="M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm10-.5h2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-2H13a2 2 0 0 0 2-2z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconCameraFramePresetFilled;
