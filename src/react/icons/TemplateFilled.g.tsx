import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTemplateFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13 3v18H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM14.5 3v6.5H21V5a2 2 0 0 0-2-2zM21 11h-6.5v10H19a2 2 0 0 0 2-2z" />
		</svg>
	);
};

IconTemplateFilled.iconName = "template--filled";

export default IconTemplateFilled;
