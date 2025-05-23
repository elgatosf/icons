import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSlack = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.625 6.782c-1.04 0-1.89-.85-1.89-1.891S8.585 3 9.625 3s1.891.85 1.891 1.89v1.892zM4.89 16.266c1.042 0 1.892-.85 1.892-1.891v-1.891H4.89c-1.04 0-1.891.85-1.891 1.89s.85 1.891 1.89 1.891M9.625 12.484c-1.04 0-1.89.85-1.89 1.89v4.735c0 1.04.85 1.891 1.89 1.891s1.891-.85 1.891-1.89v-4.735c0-1.041-.85-1.891-1.89-1.891M11.516 9.625c0-1.04-.85-1.89-1.89-1.89H4.89C3.85 7.735 3 8.585 3 9.625s.85 1.891 1.89 1.891h4.735c1.041 0 1.891-.85 1.891-1.89M17.218 9.625c0-1.04.85-1.89 1.891-1.89S21 8.585 21 9.625s-.85 1.891-1.89 1.891h-1.892zM14.375 11.516c1.04 0 1.89-.85 1.89-1.89V4.89c0-1.04-.85-1.891-1.89-1.891s-1.891.85-1.891 1.89v4.735c0 1.041.85 1.891 1.89 1.891M14.375 17.218c1.04 0 1.89.85 1.89 1.891S15.416 21 14.375 21s-1.891-.85-1.891-1.89v-1.892zM12.484 14.375c0 1.04.85 1.89 1.89 1.89h4.735c1.04 0 1.891-.85 1.891-1.89s-.85-1.891-1.89-1.891h-4.735c-1.041 0-1.891.85-1.891 1.89" />
		</svg>
	);
};

IconLogoSlack.iconName = "logo-slack";

export default IconLogoSlack;
