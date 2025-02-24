import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDiscountIncrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.854 2.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 .708.708L14 3.707V5.5C14 11.299 9.299 16 3.5 16a.5.5 0 0 0 0 1C9.851 17 15 11.851 15 5.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708zM8.854 5.854l-5 5a.5.5 0 0 1-.708-.708l5-5a.5.5 0 1 1 .708.708M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
			<path d="M8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
		</svg>
	);
};

IconDiscountIncrease.iconName = "discount-increase";

export default IconDiscountIncrease;
