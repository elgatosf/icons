import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGradientLinearFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2.042-1.125a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75M12.584 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75-4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.792-1.375a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25M15 12a.625.625 0 1 1-1.25 0A.625.625 0 0 1 15 12m-5.958.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconGradientLinearFilled.iconName = "gradient-linear--filled";

export default IconGradientLinearFilled;
