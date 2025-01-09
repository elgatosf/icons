import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignHorizontalCenterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 3a.75.75 0 0 1 .75.75V6H18a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-5.25v2H15a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2.25v2.25a.75.75 0 0 1-1.5 0V18H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2.25v-2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.25V3.75A.75.75 0 0 1 12 3" />
		</svg>
	);
};

IconAlignHorizontalCenterFilled.iconName = "align-horizontal-center--filled";

export default IconAlignHorizontalCenterFilled;
