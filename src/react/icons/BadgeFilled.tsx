/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconBadgeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M13 2.185a2 2 0 0 0-2 0L4 6.226a2 2 0 0 0-1 1.732v8.083a2 2 0 0 0 1 1.732l7 4.042a2 2 0 0 0 2 0l7-4.042a2 2 0 0 0 1-1.732V7.958a2 2 0 0 0-1-1.732zm-.103 4.632a1 1 0 0 0-1.794 0l-1.16 2.351-2.595.377a1 1 0 0 0-.555 1.706l1.878 1.83-.443 2.585a1 1 0 0 0 1.45 1.054L12 15.5l2.32 1.22a1 1 0 0 0 1.452-1.054l-.443-2.585 1.877-1.83a1 1 0 0 0-.554-1.706l-2.595-.377z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconBadgeFilled.iconName = "badge--filled";

export default IconBadgeFilled;
