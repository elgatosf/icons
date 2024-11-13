/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconOpacitySet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6.78 3.22a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m7 0a.75.75 0 0 1 0 1.06l-9.5 9.5a.75.75 0 0 1-1.06-1.06l9.5-9.5a.75.75 0 0 1 1.06 0m7 0a.75.75 0 0 1 0 1.06l-16.5 16.5a.75.75 0 0 1-1.06-1.06l16.5-16.5a.75.75 0 0 1 1.06 0m0 7a.75.75 0 0 1 0 1.06l-.394.394a6.5 6.5 0 0 0-1.578-.542l.912-.912a.75.75 0 0 1 1.06 0m-9.648 8.588a6.5 6.5 0 0 0 .542 1.578l-.394.394a.75.75 0 1 1-1.06-1.06z" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.5-7.5a.5.5 0 0 0-.5-.5h-2.828a.5.5 0 0 0 0 1h1.621l-3.147 3.146a.5.5 0 1 0 .707.708L19 16.707v1.621a.5.5 0 1 0 1 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconOpacitySet;
