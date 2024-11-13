/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconViewFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
			<path
				fillRule="evenodd"
				d="M12 5c-5.172 0-8.5 4.237-9.723 6.118a1.61 1.61 0 0 0 0 1.764C3.5 14.763 6.827 19 12 19c5.172 0 8.5-4.237 9.724-6.118a1.6 1.6 0 0 0 0-1.764C20.5 9.237 17.172 5 12 5m4 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconViewFilled;
