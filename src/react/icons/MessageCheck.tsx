/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMessageCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m4.713 16.419-1.075 3.943 3.943-1.075.52.268a8.45 8.45 0 0 0 3.629.94 6.5 6.5 0 0 0 1.05 1.475 9.96 9.96 0 0 1-5.37-1.082L3.19 22.04a1 1 0 0 1-1.228-1.228l1.152-4.224A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10q0 .395-.03.78a6.5 6.5 0 0 0-1.474-1.05 8.5 8.5 0 1 0-16.051 4.169z" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMessageCheck.iconName = "message-check";

export default IconMessageCheck;
