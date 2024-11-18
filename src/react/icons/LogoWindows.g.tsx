import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWindows = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3 3h8.532v8.532H3zm9.468 0H21v8.532h-8.532zm-.936 9.469H3V21h8.532zm.936 0H21V21h-8.532z" />
		</svg>
	);
};

IconLogoWindows.iconName = "logo-windows";

export default IconLogoWindows;
