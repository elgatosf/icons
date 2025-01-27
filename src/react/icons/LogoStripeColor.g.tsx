import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStripeColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="#635BFF" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M11.22 9.775c0-.47.385-.655 1.025-.655.92 0 2.08.28 3 .775v-2.84A8 8 0 0 0 12.25 6.5c-2.455 0-4.085 1.28-4.085 3.42 0 3.335 4.595 2.805 4.595 4.245 0 .555-.485.735-1.16.735-1.005 0-2.285-.41-3.3-.965v2.875c1.125.485 2.26.69 3.3.69 2.515 0 4.245-1.245 4.245-3.41-.02-3.6-4.625-2.96-4.625-4.315"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoStripeColor.iconName = "logo-stripe--color";

export default IconLogoStripeColor;
