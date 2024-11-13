/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconZoomOutFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M8.25 9.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M16.307 15.246a7.5 7.5 0 1 0-1.06 1.06l4.473 4.474a.75.75 0 1 0 1.06-1.06l-4.473-4.473ZM10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconZoomOutFilled;
