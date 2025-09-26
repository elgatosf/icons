import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGradientLinear = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9.042 8.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75M12.584 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M11.834 14.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12.584 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M14.376 8.625a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25M15 12a.625.625 0 1 1-1.25 0A.625.625 0 0 1 15 12M9.042 12.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75" />
			<path
				fillRule="evenodd"
				d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconGradientLinear.iconName = "gradient-linear";

export default IconGradientLinear;
