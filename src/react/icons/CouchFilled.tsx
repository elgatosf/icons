/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCouchFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.5h-1a3.5 3.5 0 0 0-3.5 3.5v1.5h-7V11A3.5 3.5 0 0 0 5 7.5H4z" />
			<path d="M17 11a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2v1.25a.75.75 0 0 1-1.5 0V19h-13v1.25a.75.75 0 0 1-1.5 0V19a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2.25c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75z" />
		</svg>
	);
};

export default IconCouchFilled;
