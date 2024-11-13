/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMarginXDecrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16 4.5H8v15h3.313c.173.534.412 1.037.709 1.5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.022a6.5 6.5 0 0 0-1.5-.709V5a.5.5 0 0 0-.5-.5h-1.5V11a6.5 6.5 0 0 0-1.5.174zm-11 0h1.5v15H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-3-6a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconMarginXDecrease;
