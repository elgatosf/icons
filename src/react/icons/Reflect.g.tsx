import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconReflect = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10.5 3.75a.75.75 0 0 0-1.5 0v9.19L4.28 8.22a.75.75 0 0 0-1.06 1.06l11.5 11.5a.75.75 0 1 0 1.06-1.06L11.06 15h8.38l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H10.5z" />
		</svg>
	);
};

IconReflect.iconName = "reflect";

export default IconReflect;
