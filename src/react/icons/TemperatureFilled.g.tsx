import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTemperatureFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M10 5.5v7.258a4.5 4.5 0 1 1-5 0V5.5a2.5 2.5 0 0 1 5 0M8.5 8V5.5a1 1 0 0 0-2 0V8z"
				clipRule="evenodd"
			/>
			<path d="M14 14.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M12.75 12.5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM12.75 8h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5M20.25 5h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5" />
		</svg>
	);
};

IconTemperatureFilled.iconName = "temperature--filled";

export default IconTemperatureFilled;
