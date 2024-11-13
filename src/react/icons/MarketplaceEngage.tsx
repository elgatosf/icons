/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMarketplaceEngage = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fillRule="evenodd" d="M3 12a9 9 0 1 1 9 9H3zm1.5 0v7.5H12A7.5 7.5 0 1 0 4.5 12" clipRule="evenodd" />
		</svg>
	);
};

IconMarketplaceEngage.iconName = "marketplace-engage";

export default IconMarketplaceEngage;
