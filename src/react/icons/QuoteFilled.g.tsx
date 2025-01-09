import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconQuoteFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.521 4.305a.75.75 0 0 1-.158 1.048 9.5 9.5 0 0 0-3.655 5.668Q3.852 11 4 11h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a11 11 0 0 1 4.472-8.854.75.75 0 0 1 1.05.159M13 13a11 11 0 0 1 4.47-8.853.75.75 0 0 1 .891 1.208 9.5 9.5 0 0 0-3.653 5.666Q14.852 11 15 11h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2z" />
		</svg>
	);
};

IconQuoteFilled.iconName = "quote--filled";

export default IconQuoteFilled;
