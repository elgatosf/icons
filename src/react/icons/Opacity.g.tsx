import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconOpacity = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.78 3.22a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m7 0a.75.75 0 0 1 0 1.06l-9.5 9.5a.75.75 0 0 1-1.06-1.06l9.5-9.5a.75.75 0 0 1 1.06 0m7 0a.75.75 0 0 1 0 1.06l-16.5 16.5a.75.75 0 0 1-1.06-1.06l16.5-16.5a.75.75 0 0 1 1.06 0m0 7a.75.75 0 0 1 0 1.06l-9.5 9.5a.75.75 0 1 1-1.06-1.06l9.5-9.5a.75.75 0 0 1 1.06 0m0 7a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconOpacity.iconName = "opacity";

export default IconOpacity;
