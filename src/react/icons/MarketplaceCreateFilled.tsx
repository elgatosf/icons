/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMarketplaceCreateFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.127 11.298 5.3 9.862A3.544 3.544 0 1 1 9.862 5.3l1.436 3.827c.243.65 1.16.65 1.404 0L14.138 5.3A3.544 3.544 0 1 1 18.7 9.862l-3.827 1.436c-.65.243-.65 1.16 0 1.404l3.827 1.436a3.544 3.544 0 1 1-4.562 4.562l-1.436-3.827c-.243-.65-1.16-.65-1.404 0L9.862 18.7A3.544 3.544 0 1 1 5.3 14.138l3.827-1.436c.65-.243.65-1.16 0-1.404" />
		</svg>
	);
};

export default IconMarketplaceCreateFilled;
