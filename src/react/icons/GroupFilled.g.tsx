import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconGroupFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m9 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-12.5 5A5.5 5.5 0 0 0 2 18a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 5.5 5.5 0 0 0-5.5-5.5m6.846 6.53a.75.75 0 0 0 .717.97H20a2 2 0 0 0 2-2 5.5 5.5 0 0 0-8.298-4.736.75.75 0 0 0-.255 1.042A6.97 6.97 0 0 1 14.5 18q-.002.541-.154 1.03" />
		</svg>
	);
};

IconGroupFilled.iconName = "group--filled";

export default IconGroupFilled;
