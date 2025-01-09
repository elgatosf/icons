import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobe = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.4 3H2v17.7zM14.608 3H22v17.7zM16.715 20.7l-4.71-11.176-3.236 7.618h3.448l1.407 3.558z" />
		</svg>
	);
};

IconLogoAdobe.iconName = "logo-adobe";

export default IconLogoAdobe;
