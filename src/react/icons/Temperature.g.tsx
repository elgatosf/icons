import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTemperature = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M10 12.758V5.5a2.5 2.5 0 0 0-5 0v7.258a4.5 4.5 0 1 0 5 0m-3.5.8-.666.446a3 3 0 1 0 3.331 0L8.5 13.56V5.5a1 1 0 0 0-2 0z"
				clipRule="evenodd"
			/>
			<path d="M14.75 14a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM20.25 12.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0 0 1.5zM17.25 8h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5M12.75 5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5" />
		</svg>
	);
};

IconTemperature.iconName = "temperature";

export default IconTemperature;
