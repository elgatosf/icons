/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraFramePresetSet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 2.75A.75.75 0 0 1 2.75 2h2.5a.75.75 0 0 1 0 1.5H3.5v1.75a.75.75 0 0 1-1.5 0zm0 18.5v-2.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m20-18.5v2.5a.75.75 0 0 1-1.5 0V3.5h-1.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75M17 6.5h-2v4.998a6.5 6.5 0 0 0-1.5.878V6.5H7a.5.5 0 0 0-.5.5v6.5h5.876a6.5 6.5 0 0 0-.878 1.5H6.5v2a.5.5 0 0 0 .5.5h4q.002.776.174 1.5H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4.174A6.5 6.5 0 0 0 17.5 11V7a.5.5 0 0 0-.5-.5" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.5-7.5a.5.5 0 0 0-.5-.5h-2.828a.5.5 0 0 0 0 1h1.621l-3.147 3.146a.5.5 0 1 0 .707.708L19 16.707v1.621a.5.5 0 1 0 1 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconCameraFramePresetSet;
