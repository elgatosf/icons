/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipHorizontalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 2.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75M3.463 17.943A.75.75 0 0 1 3 17.25V6.75a.75.75 0 0 1 1.28-.53l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-.817.163M11.25 7.5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0zm1.5 9a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 1.5 0zM12 21.25a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75m8.537-3.307A.75.75 0 0 0 21 17.25V6.75a.75.75 0 0 0-1.28-.53l-5.25 5.25a.75.75 0 0 0 0 1.06l5.25 5.25a.75.75 0 0 0 .817.163M12 10.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75" />
		</svg>
	);
};

export default IconFlipHorizontalFilled;
