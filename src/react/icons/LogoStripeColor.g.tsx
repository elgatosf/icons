import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStripeColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fillRule="evenodd" clipRule="evenodd" d="M3 21.2152L21 17.3427V2.78491L3 6.58571V21.2152Z" fill="#533AFD" />
		</svg>
	);
};

IconLogoStripeColor.iconName = "logo-stripe--color";

export default IconLogoStripeColor;
