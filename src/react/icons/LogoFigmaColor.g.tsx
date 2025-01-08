import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoFigmaColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#24CB71" d="M5.333 18.667a3.333 3.333 0 0 1 3.333-3.334H12v3.334a3.333 3.333 0 0 1-6.667 0" />
			<path fill="#FF7237" d="M12 2v6.667h3.333a3.333 3.333 0 1 0 0-6.667z" />
			<path fill="#00B6FF" d="M15.306 15.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666" />
			<path fill="#FF3737" d="M5.334 5.333a3.333 3.333 0 0 0 3.333 3.334H12V2H8.667a3.333 3.333 0 0 0-3.333 3.333" />
			<path fill="#874FFF" d="M5.333 12a3.333 3.333 0 0 0 3.333 3.333H12V8.667H8.666A3.333 3.333 0 0 0 5.333 12" />
		</svg>
	);
};

IconLogoFigmaColor.iconName = "logo-figma--color";

export default IconLogoFigmaColor;
