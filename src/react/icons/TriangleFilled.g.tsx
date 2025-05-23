import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTriangleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10.268 4c.77-1.333 2.694-1.333 3.464 0l8.083 14c.77 1.333-.193 3-1.732 3H3.917c-1.54 0-2.502-1.667-1.732-3z" />
		</svg>
	);
};

IconTriangleFilled.iconName = "triangle--filled";

export default IconTriangleFilled;
