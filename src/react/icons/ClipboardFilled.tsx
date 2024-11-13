/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconClipboardFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M7.014 4A2.25 2.25 0 0 1 9.25 2h5.5a2.25 2.25 0 0 1 2.236 2H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2.236-.5h5.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 .75-.75"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconClipboardFilled;
