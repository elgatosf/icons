import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTemplateFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M13 3V21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H13Z" />
			<path d="M14.5 3V9.5H21V5C21 3.89543 20.1046 3 19 3H14.5Z" />
			<path d="M21 11H14.5V21H19C20.1046 21 21 20.1046 21 19V11Z" />
		</svg>
	);
};

IconTemplateFilled.iconName = "template--filled";

export default IconTemplateFilled;
