import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWindowsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#0078D4"
				d="M3 3h8.532v8.532H3zM12.468 3H21v8.532h-8.532zM11.532 12.469H3V21h8.532zM12.468 12.469H21V21h-8.532z"
			/>
		</svg>
	);
};

IconLogoWindowsColor.iconName = "logo-windows--color";

export default IconLogoWindowsColor;
