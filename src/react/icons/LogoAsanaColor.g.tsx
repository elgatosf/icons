import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAsanaColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fill="#FF584A"
				d="M15.898 7.333a3.898 3.898 0 1 1-7.796 0 3.898 3.898 0 0 1 7.796 0m-8.96 4.872a3.898 3.898 0 1 0 0 7.796 3.898 3.898 0 0 0 0-7.796m10.126 0A3.898 3.898 0 1 0 17.063 20a3.898 3.898 0 0 0 .001-7.795"
			/>
		</svg>
	);
};

IconLogoAsanaColor.iconName = "logo-asana--color";

export default IconLogoAsanaColor;
