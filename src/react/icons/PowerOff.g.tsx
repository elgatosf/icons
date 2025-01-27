import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPowerOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06L18.872 6.19A9 9 0 0 1 6.19 18.872L3.28 21.78a.75.75 0 0 1-1.06 0m5.034-3.973q.278.228.58.429a7.5 7.5 0 0 0 9.973-10.982z"
				clipRule="evenodd"
			/>
			<path d="m4.248 16.573 1.103-1.103a7.5 7.5 0 0 1 1.346-8.773.75.75 0 1 0-1.061-1.061 9 9 0 0 0-1.388 10.937M11.25 2.75v6.82l1.5-1.5V2.75a.75.75 0 0 0-1.5 0" />
		</svg>
	);
};

IconPowerOff.iconName = "power-off";

export default IconPowerOff;
