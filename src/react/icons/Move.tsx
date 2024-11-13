/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMove = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.22 6.28a.75.75 0 1 0 1.06-1.06l-2.75-2.75a.75.75 0 0 0-1.06 0L8.72 5.22a.75.75 0 0 0 1.06 1.06l1.47-1.47v6.44H4.81l1.47-1.47a.75.75 0 0 0-1.06-1.06l-2.75 2.75a.75.75 0 0 0 0 1.06l2.75 2.75a.75.75 0 0 0 1.06-1.06l-1.47-1.47h6.44v6.44l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l2.75-2.75a.75.75 0 1 0-1.06-1.06l-1.47 1.47v-6.44h6.44l-1.47 1.47a.75.75 0 1 0 1.06 1.06l2.75-2.75a.75.75 0 0 0 0-1.06l-2.75-2.75a.75.75 0 1 0-1.06 1.06l1.47 1.47h-6.44V4.81z" />
		</svg>
	);
};

IconMove.iconName = "move";

export default IconMove;
