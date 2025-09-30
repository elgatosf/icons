import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWindows = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M3 2.99988H11.532V11.5318H3V2.99988Z" />
			<path d="M12.468 2.99996H21V11.5319H12.468V2.99996Z" />
			<path d="M11.532 12.4688H3V21.0008H11.532V12.4688Z" />
			<path d="M12.468 12.4688H21V21.0008H12.468V12.4688Z" />
		</svg>
	);
};

IconLogoWindows.iconName = "logo-windows";

export default IconLogoWindows;
