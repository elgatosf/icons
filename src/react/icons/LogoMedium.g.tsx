import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMedium = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13.407 12c0 3.45-2.778 6.247-6.204 6.247C3.776 18.247.998 15.45.998 12s2.778-6.247 6.205-6.247S13.407 8.55 13.407 12M20.215 12c0 3.248-1.39 5.882-3.103 5.882S14.01 15.248 14.01 12s1.389-5.881 3.102-5.881S20.215 8.752 20.215 12M21.907 17.269c.603 0 1.091-2.36 1.091-5.269s-.488-5.269-1.09-5.269-1.092 2.36-1.092 5.27.489 5.268 1.091 5.268" />
		</svg>
	);
};

IconLogoMedium.iconName = "logo-medium";

export default IconLogoMedium;
