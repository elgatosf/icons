import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignVerticalCenterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8 20a2 2 0 0 1-2-2v-5.25H3.75a.75.75 0 0 1 0-1.5H6V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5.25h2V9a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2.25h2.25a.75.75 0 0 1 0 1.5H18V15a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2.25h-2V18a2 2 0 0 1-2 2z" />
		</svg>
	);
};

IconAlignVerticalCenterFilled.iconName = "align-vertical-center--filled";

export default IconAlignVerticalCenterFilled;
