import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowTopLeft = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M14.854 14.854a.5.5 0 0 1-.708 0L6 6.707V12a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H6.707l8.147 8.146a.5.5 0 0 1 0 .708"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconArrowTopLeft.iconName = "arrow-top-left";

export default IconArrowTopLeft;
