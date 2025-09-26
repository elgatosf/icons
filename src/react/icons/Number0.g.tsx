import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber0 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.85 11.944c0 2.688-.896 5.334-3.878 5.334-2.968 0-3.822-2.716-3.822-5.348 0-2.618.952-5.208 3.864-5.208 2.954 0 3.836 2.59 3.836 5.222m-2.1.126c0-1.26-.028-3.892-1.708-3.892-1.764 0-1.778 2.632-1.778 3.92 0 1.204.07 3.71 1.708 3.71 1.68 0 1.778-2.478 1.778-3.738" />
		</svg>
	);
};

IconNumber0.iconName = "number0";

export default IconNumber0;
