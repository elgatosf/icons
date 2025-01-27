import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4 4a2 2 0 0 0-2 2v1.5h20V6a2 2 0 0 0-2-2zM22 9H2v9a2 2 0 0 0 2 2h6.955A7 7 0 0 1 22 12.15z" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.646-1.854a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647 3.146-3.147a.5.5 0 0 1 .708 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconWindowCheckFilled.iconName = "window-check--filled";

export default IconWindowCheckFilled;
