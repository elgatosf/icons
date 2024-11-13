/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMessageDownToBottom = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m4.713 16.419-1.075 3.943 3.943-1.075.52.268a8.4 8.4 0 0 0 3.629.94 6.5 6.5 0 0 0 1.05 1.475 9.96 9.96 0 0 1-5.369-1.082L3.189 22.04a1 1 0 0 1-1.228-1.228l1.152-4.224A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10q0 .394-.03.781a6.5 6.5 0 0 0-1.474-1.051A8.5 8.5 0 0 0 3.5 12c0 1.409.341 2.733.945 3.899z" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-2.354-7.146 2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L17.5 16.793l-1.646-1.647a.5.5 0 0 0-.708.708M15.5 20a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMessageDownToBottom.iconName = "message-down-to-bottom";

export default IconMessageDownToBottom;
