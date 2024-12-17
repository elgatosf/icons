import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDeliveryFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9.145A3.5 3.5 0 0 0 13.535 18h-3.07a3.5 3.5 0 0 0-6.922-.052A2 2 0 0 1 2 16zm15.5 9.035a3.5 3.5 0 0 1 2.957 2.913A2 2 0 0 0 22 16v-3.446a2 2 0 0 0-.285-1.029l-2.132-3.554A2 2 0 0 0 17.868 7H17.5zM19 18.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
			<path d="M7 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
		</svg>
	);
};

IconDeliveryFilled.iconName = "delivery--filled";

export default IconDeliveryFilled;
