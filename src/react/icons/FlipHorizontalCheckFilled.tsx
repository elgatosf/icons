/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipHorizontalCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.25 3.5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0zM3 17.25a.75.75 0 0 0 1.28.53l5.25-5.25a.75.75 0 0 0 0-1.06L4.28 6.22A.75.75 0 0 0 3 6.75zm8.25-9.75a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0zM21 6.75v5.272A6.47 6.47 0 0 0 17.5 11a6.47 6.47 0 0 0-3.237.862.75.75 0 0 1 .207-.392l5.25-5.25a.75.75 0 0 1 1.28.53m-9 4a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconFlipHorizontalCheckFilled;
