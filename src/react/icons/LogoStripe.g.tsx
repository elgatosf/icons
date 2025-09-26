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
			<path fillRule="evenodd" d="m3 21.215 18-3.872V2.785l-18 3.8z" clipRule="evenodd" />
		</svg>
	);
};

IconLogoStripe.iconName = "logo-stripe";

export default IconLogoStripe;
