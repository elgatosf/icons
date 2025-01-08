import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStripe = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-9.755-2.88c-.64 0-1.025.185-1.025.655 0 .515.667.742 1.494 1.024 1.346.458 3.119 1.06 3.131 3.291 0 2.165-1.73 3.41-4.245 3.41a8.4 8.4 0 0 1-3.3-.69v-2.875c1.015.555 2.295.965 3.3.965.675 0 1.16-.18 1.16-.735 0-.571-.723-.832-1.594-1.148-1.328-.48-3.001-1.085-3.001-3.097 0-2.14 1.63-3.42 4.085-3.42 1 0 1.99.155 2.995.555v2.84c-.92-.495-2.08-.775-3-.775"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoStripe.iconName = "logo-stripe";

export default IconLogoStripe;
