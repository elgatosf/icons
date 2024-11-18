import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconUnderline = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.5 3.75a.75.75 0 0 0-1.5 0V12a6 6 0 0 0 12 0V3.75a.75.75 0 0 0-1.5 0V12a4.5 4.5 0 1 1-9 0zM3.75 20.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z" />
		</svg>
	);
};

IconUnderline.iconName = "underline";

export default IconUnderline;
