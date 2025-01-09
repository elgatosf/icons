import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipVerticalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M20.25 12.75a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zM6.75 3a.75.75 0 0 0-.53 1.28l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25A.75.75 0 0 0 17.25 3zM6.75 21a.75.75 0 0 1-.53-1.28l5.25-5.25a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1-.53 1.28z" />
		</svg>
	);
};

IconFlipVerticalFilled.iconName = "flip-vertical--filled";

export default IconFlipVerticalFilled;
