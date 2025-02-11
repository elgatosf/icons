import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowBottomLeft = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M14.854 5.146a.5.5 0 0 1 0 .708L6.707 14H12a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 1 0v5.293l8.146-8.147a.5.5 0 0 1 .708 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconArrowBottomLeft.iconName = "arrow-bottom-left";

export default IconArrowBottomLeft;
