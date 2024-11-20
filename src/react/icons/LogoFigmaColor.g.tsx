import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
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
			<path fill="#0ACF83" d="M8.876 21.376c1.725 0 3.125-1.4 3.125-3.126v-3.125H8.876a3.126 3.126 0 0 0 0 6.25" />
			<path fill="#A259FF" d="M5.75 12c0-1.725 1.4-3.125 3.126-3.125H12v6.25H8.876A3.127 3.127 0 0 1 5.75 12" />
			<path fill="#F24E1E" d="M5.75 5.75c0-1.726 1.4-3.126 3.125-3.126h3.126v6.25H8.876A3.127 3.127 0 0 1 5.75 5.75" />
			<path fill="#FF7262" d="M12 2.624h3.126a3.126 3.126 0 0 1 0 6.25h-3.125z" />
			<path fill="#1ABCFE" d="M18.252 12A3.126 3.126 0 0 1 12 12a3.126 3.126 0 0 1 6.25 0" />
		</svg>
	);
};

IconLogoFigmaColor.iconName = "logo-figma--color";

export default IconLogoFigmaColor;
