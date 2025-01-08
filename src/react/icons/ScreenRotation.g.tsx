import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconScreenRotation = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M5 3.75A.75.75 0 0 1 5.75 3h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V5.551a1 1 0 0 1-.156.116 7.313 7.313 0 0 0 1.763 13.396.844.844 0 0 1-.436 1.63A9 9 0 0 1 7.025 4.5H5.75A.75.75 0 0 1 5 3.75M15.5 18.449a1 1 0 0 1 .156-.116 7.312 7.312 0 0 0-1.763-13.396.844.844 0 0 1 .436-1.63A9 9 0 0 1 16.975 19.5h1.275a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0z" />
			<path
				fillRule="evenodd"
				d="M11.166 8.592a2 2 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.828l-2.577 2.577a2 2 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.828zm1.767 1.06 1.415 1.415a.5.5 0 0 1 0 .707L11.77 14.35a.5.5 0 0 1-.707 0l-1.415-1.415a.5.5 0 0 1 0-.707l2.577-2.577a.5.5 0 0 1 .707 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconScreenRotation.iconName = "screen-rotation";

export default IconScreenRotation;
