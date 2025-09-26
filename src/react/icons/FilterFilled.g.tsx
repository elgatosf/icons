import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFilterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0m-5.5 0a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm2-2.5A.5.5 0 0 0 14 7H6a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5M11 13a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFilterFilled.iconName = "filter--filled";

export default IconFilterFilled;
