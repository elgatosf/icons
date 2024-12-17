import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMoreAlt = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m5-1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
		</svg>
	);
};

IconMoreAlt.iconName = "more-alt";

export default IconMoreAlt;
