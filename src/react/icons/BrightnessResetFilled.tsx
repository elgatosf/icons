/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconBrightnessResetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 2a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 12 2m7.071 2.929a.75.75 0 0 1 0 1.06l-1.59 1.592a.75.75 0 0 1-1.062-1.061l1.591-1.591a.75.75 0 0 1 1.061 0M4.929 18.01a.75.75 0 0 0 1.06 1.061l1.592-1.59a.75.75 0 1 0-1.061-1.062zM2 12a.75.75 0 0 1 .75-.75H5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 12m3.99-7.071a.75.75 0 0 0-1.061 1.06l1.59 1.592A.75.75 0 0 0 7.582 6.52zm5.037 11.976A5.002 5.002 0 0 1 12 7a5 5 0 0 1 4.905 4.027 6.5 6.5 0 0 0-5.879 5.879Z" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m.488-7.952A2.5 2.5 0 0 0 15.5 16h1a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v.55a3.5 3.5 0 1 1 .025 4.925.5.5 0 0 1 .707-.707 2.5 2.5 0 1 0 2.256-4.22"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconBrightnessResetFilled;
