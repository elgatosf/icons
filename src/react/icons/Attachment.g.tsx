import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconAttachment = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10.755 4.745a4.25 4.25 0 1 0-6.01 6.01l.531.531a.75.75 0 1 1-1.06 1.061l-.532-.531a5.75 5.75 0 0 1 8.132-8.132l8.5 8.5a5.75 5.75 0 0 1-8.132 8.132l-4.056-4.057a4.25 4.25 0 1 1 6.01-6.01l2.473 2.473a.75.75 0 1 1-1.061 1.06l-2.473-2.473a2.75 2.75 0 1 0-3.889 3.89l4.057 4.056a4.25 4.25 0 1 0 6.01-6.01z" />
		</svg>
	);
};

IconAttachment.iconName = "attachment";

export default IconAttachment;
