import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSystemFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 20 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.5 17.9846C14.6854 17.7265 18 14.2504 18 10C18 5.74966 14.6854 2.27348 10.5 2.01538V17.9846ZM9.5 2.01538C5.31463 2.27348 2 5.74966 2 10C2 14.2504 5.31463 17.7265 9.5 17.9846V2.01538Z"
			/>
		</svg>
	);
};

IconSystemFilled.iconName = "system--filled";

export default IconSystemFilled;
