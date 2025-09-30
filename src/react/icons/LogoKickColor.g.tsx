import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoKickColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 3H10.0001V6.99996H12.0001V4.99998H14.0001V3H20V8.99995H18V10.9999H16.0001V12.9999H18V14.9999H20V21H14.0001V19H12.0001V17H10.0001V21H4V3Z"
				fill="#52FB17"
			/>
		</svg>
	);
};

IconLogoKickColor.iconName = "logo-kick--color";

export default IconLogoKickColor;
