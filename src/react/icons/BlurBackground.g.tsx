import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBlurBackground = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10 3.5A.75.75 0 1 1 10 2a.75.75 0 0 1 0 1.5M18 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0M21.25 9.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M3.5 14A.75.75 0 1 1 2 14a.75.75 0 0 1 1.5 0M14.75 21.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M21.25 13.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M3.5 10A.75.75 0 1 1 2 10a.75.75 0 0 1 1.5 0M10.75 21.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M14 3.5A.75.75 0 1 1 14 2a.75.75 0 0 1 0 1.5M11 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0M14 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0M18 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0M18 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2M11 13a2 2 0 0 0-2 2 1 1 0 0 0 1 1h4a1 1 0 0 0 1-1 2 2 0 0 0-2-2z" />
		</svg>
	);
};

IconBlurBackground.iconName = "blur-background";

export default IconBlurBackground;
