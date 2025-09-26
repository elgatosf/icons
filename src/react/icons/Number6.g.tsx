import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber6 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.815 13.666c0 2.184-1.624 3.612-3.668 3.612-2.996 0-3.962-2.436-3.962-5.18s.994-5.376 4.032-5.376c1.778 0 3.276.812 3.276 2.73h-2.016c0-.938-.532-1.358-1.33-1.358-1.694 0-1.974 2.31-1.988 3.668.574-1.008 1.414-1.414 2.52-1.414 1.764 0 3.136 1.288 3.136 3.318m-1.946.084c0-1.12-.532-2.03-1.68-2.03-1.316 0-1.806.966-1.806 2.072 0 1.12.644 2.016 1.764 2.016 1.148 0 1.722-.924 1.722-2.058" />
		</svg>
	);
};

IconNumber6.iconName = "number6";

export default IconNumber6;
