import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAsana = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.898 7.333a3.898 3.898 0 1 1-7.797 0 3.898 3.898 0 0 1 7.797 0m-8.961 4.872a3.898 3.898 0 1 0 0 7.796 3.898 3.898 0 0 0 0-7.796m10.127 0A3.898 3.898 0 1 0 17.062 20a3.898 3.898 0 0 0 .002-7.795" />
		</svg>
	);
};

IconLogoAsana.iconName = "logo-asana";

export default IconLogoAsana;
