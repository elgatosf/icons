import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconItalic = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.514 3h3.736a.75.75 0 0 1 0 1.5h-3.194l-4.545 15h2.739a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3.194l4.545-15H10.75a.75.75 0 0 1 0-1.5h3.765Z" />
		</svg>
	);
};

IconItalic.iconName = "italic";

export default IconItalic;
