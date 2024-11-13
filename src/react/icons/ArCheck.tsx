/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconArCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 2.75A.75.75 0 0 1 2.75 2h2.5a.75.75 0 0 1 0 1.5H3.5v1.75a.75.75 0 0 1-1.5 0zm0 18.5v-2.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m20-18.5v2.5a.75.75 0 0 1-1.5 0V3.5h-1.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75" />
			<path
				fillRule="evenodd"
				d="M13 4.494a2 2 0 0 0-2 0L6 7.381a2 2 0 0 0-1 1.732v5.774a2 2 0 0 0 1 1.732l5 2.887q.18.103.372.166a6.5 6.5 0 0 1-.366-1.895L6.75 15.32a.5.5 0 0 1-.25-.433V9.69l4.75 2.742v3.276a6.5 6.5 0 0 1 1.5-2.646v-.63L17.5 9.69V11q.776.002 1.5.174v-2.06a2 2 0 0 0-1-1.733zm3.75 3.898-4.5-2.598a.5.5 0 0 0-.5 0l-4.5 2.598L12 11.134z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconArCheck.iconName = "ar-check";

export default IconArCheck;
