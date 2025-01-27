import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSkipBackFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 3.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0zM7 10.268c-1.333.77-1.333 2.694 0 3.464l12 6.928c1.333.77 3-.192 3-1.732V5.072c0-1.54-1.667-2.502-3-1.732z" />
		</svg>
	);
};

IconSkipBackFilled.iconName = "skip-back--filled";

export default IconSkipBackFilled;
