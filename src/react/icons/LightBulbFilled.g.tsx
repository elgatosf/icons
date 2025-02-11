import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLightBulbFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10.5 1.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0zM16.364 3.636a.5.5 0 0 1 0 .707L14.95 5.757a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0M8 15.659V16a2 2 0 0 0 4 0v-.341A6 6 0 0 1 10 16a6 6 0 0 1-2-.341M18.5 10.5a.5.5 0 0 0 0-1h-2a.5.5 0 1 0 0 1zM3.636 3.636a.5.5 0 0 1 .707 0L5.757 5.05a.5.5 0 0 1-.707.707L3.636 4.343a.5.5 0 0 1 0-.707M1.5 9.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
		</svg>
	);
};

IconLightBulbFilled.iconName = "light-bulb--filled";

export default IconLightBulbFilled;
