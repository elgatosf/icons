import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4 4a2 2 0 0 0-2 2v1.5h20V6a2 2 0 0 0-2-2zm18 5H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" />
		</svg>
	);
};

IconWindowFilled.iconName = "window--filled";

export default IconWindowFilled;
