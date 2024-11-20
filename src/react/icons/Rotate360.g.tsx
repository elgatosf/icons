import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconRotate360 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6.5 4A.75.75 0 1 0 5 4v4.25c0 .414.336.75.75.75H10a.75.75 0 0 0 0-1.5H7.31A6.5 6.5 0 1 1 5.5 12 .75.75 0 0 0 4 12a8 8 0 1 0 2.5-5.81z" />
		</svg>
	);
};

IconRotate360.iconName = "rotate360";

export default IconRotate360;
