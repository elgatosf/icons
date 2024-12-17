import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M5.282 4.222a.75.75 0 0 1 0 1.06 9.5 9.5 0 0 0 0 13.436.75.75 0 1 1-1.06 1.06 11 11 0 0 1 0-15.556.75.75 0 0 1 1.06 0" />
			<path d="M8.11 7.05a.75.75 0 0 1 0 1.061 5.5 5.5 0 0 0 0 7.778.75.75 0 0 1-1.06 1.06 7 7 0 0 1 0-9.899.75.75 0 0 1 1.06 0M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m.89 3.89a.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.9.75.75 0 1 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778Z" />
			<path d="M18.718 18.718a.75.75 0 1 0 1.06 1.06 11 11 0 0 0 0-15.556.75.75 0 0 0-1.06 1.06 9.5 9.5 0 0 1 0 13.436" />
		</svg>
	);
};

IconStreamFilled.iconName = "stream--filled";

export default IconStreamFilled;
