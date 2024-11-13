/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconHexagon = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m19.25 7.525-7-4.041a.5.5 0 0 0-.5 0l-7 4.041a.5.5 0 0 0-.25.433v8.083a.5.5 0 0 0 .25.433l7 4.042a.5.5 0 0 0 .5 0l7-4.042a.5.5 0 0 0 .25-.433V7.958a.5.5 0 0 0-.25-.433M13 2.185a2 2 0 0 0-2 0L4 6.226a2 2 0 0 0-1 1.732v8.083a2 2 0 0 0 1 1.732l7 4.042a2 2 0 0 0 2 0l7-4.042a2 2 0 0 0 1-1.732V7.958a2 2 0 0 0-1-1.732z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconHexagon;
