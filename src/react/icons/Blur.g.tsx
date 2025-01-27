import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBlur = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.25 2.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M19 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M14 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M10 12.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M19 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2M20.5 10a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M2.75 14.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M14 20.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M20.5 14a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M2.75 10.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10 20.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M13.25 2.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12.5 14a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M13 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M17 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2M17 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
		</svg>
	);
};

IconBlur.iconName = "blur";

export default IconBlur;
