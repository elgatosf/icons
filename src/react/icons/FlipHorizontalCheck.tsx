/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipHorizontalCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.25 3.5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z" />
			<path
				fillRule="evenodd"
				d="M3 17.25a.75.75 0 0 0 1.28.53l5.25-5.25a.75.75 0 0 0 0-1.06L4.28 6.22A.75.75 0 0 0 3 6.75zM7.94 12 4.5 15.44V8.56z"
				clipRule="evenodd"
			/>
			<path d="M11.25 7.5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0zM21 6.75v5.272a6.5 6.5 0 0 0-1.5-.709V8.561l-2.455 2.455a6.46 6.46 0 0 0-2.782.846.75.75 0 0 1 .207-.392l5.25-5.25a.75.75 0 0 1 1.28.53m-9 4a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconFlipHorizontalCheck;
