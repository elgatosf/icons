import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber5 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.668 13.491c0 2.436-1.47 3.668-3.668 3.668-1.876 0-3.668-.63-3.668-2.828h2.086c.028.896.644 1.344 1.484 1.344 1.162 0 1.652-.994 1.652-2.114 0-1.05-.476-1.974-1.568-1.974-.686 0-1.302.392-1.428 1.134H8.486l.224-5.88h6.412V8.34h-4.55l-.154 2.996c.532-.798 1.288-1.19 2.198-1.19 1.904 0 3.052 1.484 3.052 3.346" />
		</svg>
	);
};

IconNumber5.iconName = "number5";

export default IconNumber5;
