import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDiamondFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M10.5857 2.41422C11.3668 1.63317 12.6331 1.63317 13.4142 2.41422L21.5857 10.5858C22.3668 11.3668 22.3668 12.6332 21.5857 13.4142L13.4142 21.5858C12.6331 22.3668 11.3668 22.3668 10.5857 21.5858L2.41416 13.4142C1.63311 12.6332 1.63311 11.3668 2.41416 10.5858L10.5857 2.41422Z" />
		</svg>
	);
};

IconDiamondFilled.iconName = "diamond--filled";

export default IconDiamondFilled;
