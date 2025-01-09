import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDialStackFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M15 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0M4.22 8.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06"
				clipRule="evenodd"
			/>
			<path d="M14.476 6.212a.75.75 0 0 1 1.024-.274 7 7 0 0 1 0 12.124.75.75 0 1 1-.75-1.299 5.5 5.5 0 0 0 0-9.526.75.75 0 0 1-.274-1.025" />
			<path d="M18.476 6.212a.75.75 0 0 1 1.024-.274 7 7 0 0 1 0 12.124.75.75 0 1 1-.75-1.299 5.5 5.5 0 0 0 0-9.526.75.75 0 0 1-.274-1.025" />
		</svg>
	);
};

IconDialStackFilled.iconName = "dial-stack--filled";

export default IconDialStackFilled;
