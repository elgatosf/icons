import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCity = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12.75 1.75a.75.75 0 0 0-1.5 0V3H9.5a2 2 0 0 0-2 2v5H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.93a2 2 0 0 0-.89-1.664l-3.5-2.333a2 2 0 0 0-.11-.068V5a2 2 0 0 0-2-2h-1.75zM9 5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2.8c-.827.217-1.5.955-1.5 1.937V20.5h-3V12A2 2 0 0 0 9 10.063zm6.561 4.24-.277.046a.5.5 0 0 0-.284.451V20.5h4a.5.5 0 0 0 .5-.5v-7.93a.5.5 0 0 0-.223-.416l-3.5-2.333a.5.5 0 0 0-.216-.081M8.5 11.5H5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h4V12a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCity.iconName = "city";

export default IconCity;
