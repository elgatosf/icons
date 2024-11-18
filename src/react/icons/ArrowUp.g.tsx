import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowUp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16.72 9.78a.75.75 0 1 0 1.06-1.06l-5.25-5.25a.75.75 0 0 0-1.06 0L6.22 8.72a.75.75 0 0 0 1.06 1.06l3.97-3.97v14.444a.75.75 0 0 0 1.5 0V5.811l3.97 3.97Z" />
		</svg>
	);
};

IconArrowUp.iconName = "arrow-up";

export default IconArrowUp;
