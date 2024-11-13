/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCrownFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 3a.75.75 0 0 1 .617.323l4.122 5.954 4.162-2.19a.75.75 0 0 1 1.09.781L20.855 15H3.145L2.01 7.868a.75.75 0 0 1 1.09-.782l4.162 2.19 4.122-5.953A.75.75 0 0 1 12 3M3.385 16.5l.273 1.716a2.25 2.25 0 0 0 2.222 1.896h12.24a2.25 2.25 0 0 0 2.222-1.895l.274-1.717z" />
		</svg>
	);
};

export default IconCrownFilled;
