/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMarginXSet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.5-7.5a.5.5 0 0 0-.5-.5h-2.828a.5.5 0 0 0 0 1h1.621l-3.147 3.146a.5.5 0 1 0 .707.708L19 16.707v1.621a.5.5 0 1 0 1 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMarginXSet.iconName = "margin-x-set";

export default IconMarginXSet;
