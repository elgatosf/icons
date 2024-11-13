/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVisualStudioCode = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16.625 21.949a1.25 1.25 0 0 1-.883-.366l-7.877-7.186-3.427 2.601a.83.83 0 0 1-.508.17h-.007a.83.83 0 0 1-.56-.217L2.26 15.949a.834.834 0 0 1-.001-1.232L5.238 12 2.26 9.284a.834.834 0 0 1 0-1.233L3.363 7.05a.83.83 0 0 1 .567-.216.83.83 0 0 1 .509.17l3.427 2.6 7.877-7.186a1.24 1.24 0 0 1 .884-.365h.008c.183 0 .368.04.54.123l4.119 1.981A1.25 1.25 0 0 1 22 5.283v13.435a1.25 1.25 0 0 1-.707 1.126l-4.118 1.982a1.3 1.3 0 0 1-.53.123zm.366-14.48L11.022 12l5.97 4.531V7.47Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconLogoVisualStudioCode;
