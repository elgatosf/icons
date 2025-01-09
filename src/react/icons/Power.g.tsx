import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPower = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.75 2.75a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0z" />
			<path d="M18.364 5.636a.75.75 0 0 0-1.06 1.06 7.5 7.5 0 1 1-10.607 0 .75.75 0 1 0-1.061-1.06 9 9 0 1 0 12.728 0" />
		</svg>
	);
};

IconPower.iconName = "power";

export default IconPower;
