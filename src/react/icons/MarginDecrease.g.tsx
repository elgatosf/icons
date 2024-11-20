import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMarginDecrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M19.5 8h-2v3a6.5 6.5 0 0 0-1.5.174V8H8v8h3.174A6.5 6.5 0 0 0 11 17.5H8v2h3.313c.173.534.412 1.037.709 1.5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.022a6.5 6.5 0 0 0-1.5-.709zM19 4.5h-1.5v2h2V5a.5.5 0 0 0-.5-.5m-3 2v-2H8v2zm-9.5 0v-2H5a.5.5 0 0 0-.5.5v1.5zM4.5 8h2v8h-2zm0 9.5h2v2H5a.5.5 0 0 1-.5-.5z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m.5-8.5a.5.5 0 0 0-1 0V17h-2.5a.5.5 0 1 0 0 1H17v2.5a.5.5 0 0 0 1 0V18h2.5a.5.5 0 0 0 0-1H18z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMarginDecrease.iconName = "margin-decrease";

export default IconMarginDecrease;
