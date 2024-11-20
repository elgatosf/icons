import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconAutoScrollDownFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.22 13.22a.75.75 0 0 1 1.06 0L12 16.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0l-4.25-4.25a.75.75 0 0 1 0-1.06" />
			<path fillRule="evenodd" d="M15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0" clipRule="evenodd" />
		</svg>
	);
};

IconAutoScrollDownFilled.iconName = "auto-scroll-down--filled";

export default IconAutoScrollDownFilled;
