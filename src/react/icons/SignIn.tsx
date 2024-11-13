/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconSignIn = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M17.72 9.53a.75.75 0 1 1 1.06-1.06l3.005 3.005a.75.75 0 0 1 0 1.06l-3.005 3.006a.75.75 0 0 1-1.06-1.06l1.73-1.731h-9.7a.75.75 0 0 1 0-1.5h9.69z" />
			<path d="M15.25 9a.75.75 0 0 0 .75-.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-2.25a.75.75 0 1 0-1.5 0V18a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v2.25c0 .414.336.75.75.75" />
		</svg>
	);
};

IconSignIn.iconName = "sign-in";

export default IconSignIn;
