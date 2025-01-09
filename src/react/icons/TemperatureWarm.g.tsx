import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTemperatureWarm = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 5.5a2.5 2.5 0 0 1 5 0v7.258a4.5 4.5 0 1 1-5 0zm1.5 8.059-.666.445a3 3 0 1 0 3.331 0L8.5 13.56V5.5a1 1 0 0 0-2 0zM15 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
				clipRule="evenodd"
			/>
			<path d="M19.75 9.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM17.828 7.171a.75.75 0 0 1 0-1.06l1.061-1.06a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0M14.25 5.25a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM15 14a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 15 14M18.89 12.829a.75.75 0 0 0-1.062 1.06l1.061 1.06a.75.75 0 0 0 1.06-1.06z" />
		</svg>
	);
};

IconTemperatureWarm.iconName = "temperature-warm";

export default IconTemperatureWarm;
