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
			<path fill="#533AFD" fillRule="evenodd" d="m3 21.215 18-3.872V2.785l-18 3.8z" clipRule="evenodd" />
		</svg>
	);
};

IconLogoStripeColor.iconName = "logo-stripe--color";

export default IconLogoStripeColor;
