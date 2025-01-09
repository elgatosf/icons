import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWrenchFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3 9.5c0-1.017.234-1.98.65-2.837.268-.551.992-.606 1.426-.173l3.717 3.717a1 1 0 0 0 1.414-1.414L6.49 5.076c-.433-.434-.378-1.158.173-1.426a6.5 6.5 0 0 1 9.192 7.221c-.078.365.01.752.274 1.016l4.285 4.285a2 2 0 0 1 0 2.828L19 20.414a2 2 0 0 1-2.828 0l-4.285-4.285c-.264-.264-.651-.352-1.016-.274Q10.207 16 9.5 16A6.5 6.5 0 0 1 3 9.5" />
		</svg>
	);
};

IconWrenchFilled.iconName = "wrench--filled";

export default IconWrenchFilled;
