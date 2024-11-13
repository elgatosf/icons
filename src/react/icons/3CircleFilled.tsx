/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const Icon3CircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm9.927 10.811c0 1.771-1.662 2.332-3.07 2.332-1.561 0-2.893-.56-3.003-2.365h1.65c.023.814.617 1.221 1.343 1.221.77 0 1.43-.44 1.43-1.32 0-1-.913-1.254-1.694-1.254-.12 0-.244.01-.366.02q-.088.008-.174.013v-1.11c.144.01.287.021.43.021.78 0 1.671-.23 1.671-1.232 0-.748-.604-1.155-1.254-1.155-.506 0-1.199.275-1.199 1.111H8.997c0-1.595 1.65-2.244 2.927-2.244 1.276 0 2.838.55 2.838 2.145 0 1.012-.705 1.694-1.694 1.848 1.078.165 1.859.77 1.859 1.97Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default Icon3CircleFilled;
