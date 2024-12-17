import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDiamondFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10.586 2.414a2 2 0 0 1 2.828 0l8.172 8.172a2 2 0 0 1 0 2.828l-8.172 8.172a2 2 0 0 1-2.828 0l-8.172-8.172a2 2 0 0 1 0-2.828z" />
		</svg>
	);
};

IconDiamondFilled.iconName = "diamond--filled";

export default IconDiamondFilled;
