import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoft = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.571 3H3v8.571h8.571zM21 3h-8.571v8.571H21zM3 12.429h8.571V21H3zM21 12.429h-8.571V21H21z" />
		</svg>
	);
};

IconLogoMicrosoft.iconName = "logo-microsoft";

export default IconLogoMicrosoft;
