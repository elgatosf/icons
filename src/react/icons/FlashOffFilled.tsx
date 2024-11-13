/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFlashOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.964 2.98a.75.75 0 0 0-1.268-.736L10.272 7.09l6.493 6.494 3.039-3.328A.75.75 0 0 0 19.25 9h-5.221zM14.74 15.801l3.98 3.98a.75.75 0 1 0 1.06-1.061L5.28 4.22a.75.75 0 0 0-1.06 1.06l4.027 4.028-4.05 4.436A.75.75 0 0 0 4.75 15h5.221l-1.935 6.02a.75.75 0 0 0 1.268.736z" />
		</svg>
	);
};

export default IconFlashOffFilled;
