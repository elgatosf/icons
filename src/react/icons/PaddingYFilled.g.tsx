import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPaddingYFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21 3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 .75.75M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM20.25 21a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5z" />
		</svg>
	);
};

IconPaddingYFilled.iconName = "padding-y--filled";

export default IconPaddingYFilled;
