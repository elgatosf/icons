import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconTemperatureCool = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M7.5 3A2.5 2.5 0 0 0 5 5.5v7.258a4.5 4.5 0 1 0 5 0V5.5A2.5 2.5 0 0 0 7.5 3M5.834 14.004l.666-.445V5.5a1 1 0 0 1 2 0v8.059l.666.445a3 3 0 1 1-3.331 0Z"
				clipRule="evenodd"
			/>
			<path d="M15.75 3.75v2.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.78 2.78v.94h.94l2.78-2.78a.75.75 0 1 1 1.06 1.06l-1.72 1.72h2.44a.75.75 0 0 1 0 1.5h-2.44l1.72 1.72a.75.75 0 1 1-1.06 1.06l-2.78-2.78h-.94v.94l2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72v2.44a.75.75 0 0 1-1.5 0v-5.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-5.5a.75.75 0 0 1 1.5 0" />
		</svg>
	);
};

IconTemperatureCool.iconName = "temperature-cool";

export default IconTemperatureCool;
