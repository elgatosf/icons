import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCartAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M1 4.75A.75.75 0 0 1 1.75 4h1.326a1.75 1.75 0 0 1 1.622 1.093L8.19 13.72c.191.472.65.781 1.16.781h6.275c.518 0 .982-.32 1.167-.803l2.758-7.215a.75.75 0 1 1 1.402.536l-2.76 7.215A2.75 2.75 0 0 1 15.625 16H9.348A2.75 2.75 0 0 1 6.8 14.282L3.308 5.656a.25.25 0 0 0-.232-.156H1.75A.75.75 0 0 1 1 4.75M8.5 17a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18 18.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
			<path d="M12.5 5a.75.75 0 0 1 .75.75v2h2a.75.75 0 0 1 0 1.5h-2v2a.75.75 0 0 1-1.5 0v-2h-2a.75.75 0 0 1 0-1.5h2v-2A.75.75 0 0 1 12.5 5" />
		</svg>
	);
};

IconCartAdd.iconName = "cart-add";

export default IconCartAdd;
