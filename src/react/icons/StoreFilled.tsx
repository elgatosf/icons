/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconStoreFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.354 3a2 2 0 0 0-1.857 1.257L3.143 7.642A2 2 0 0 0 3 8.385V11.5a2 2 0 0 0 1 1.732v7.018a.75.75 0 0 0 1.5 0V13.5h4V19a2 2 0 0 0 2 2H18a2 2 0 0 0 2-2v-5.768a2 2 0 0 0 1-1.732V8.385a2 2 0 0 0-.143-.743l-1.354-3.385A2 2 0 0 0 17.646 3zM8.5 8.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm4.25 0a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm4.25 0a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStoreFilled.iconName = "store--filled";

export default IconStoreFilled;
