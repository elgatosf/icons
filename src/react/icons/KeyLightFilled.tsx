/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6.146 3.196c-1.61.123-2.85 1.338-2.995 2.946a37.6 37.6 0 0 0 0 6.716c.145 1.608 1.385 2.822 2.995 2.946 1.228.094 2.91.178 5.104.193v5.253a.75.75 0 0 0 1.5 0v-5.253a74 74 0 0 0 5.104-.193c1.61-.123 2.85-1.338 2.995-2.946a37.6 37.6 0 0 0 0-6.716c-.145-1.608-1.385-2.823-2.995-2.946C16.49 3.091 14.564 3 12 3s-4.49.091-5.854.196" />
		</svg>
	);
};

IconKeyLightFilled.iconName = "key-light--filled";

export default IconKeyLightFilled;
