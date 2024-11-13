/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoX = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M17.09 4h2.714l-5.93 6.777L20.85 20h-5.462l-4.278-5.593L6.215 20H3.499l6.343-7.25L3.149 4H8.75l3.867 5.113zm-.953 14.375h1.504L7.933 5.54H6.319z" />
		</svg>
	);
};

IconLogoX.iconName = "logo-x";

export default IconLogoX;
