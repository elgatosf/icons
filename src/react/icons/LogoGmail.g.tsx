import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGmail = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M20.5 3c-.5 0-1.1.2-1.6.6L12 9.3 5.1 3.6C4.6 3.2 4 3 3.5 3 2.2 3 1 4 1 5.5V18c0 1.1.9 2 2 2h4v-7l5 4 5-4v7h4c1.1 0 2-.9 2-2V5.5C23 4 21.8 3 20.5 3m.5 15h-2V8.8l-7 5.7-7-5.7V18H3V5.48c0-.42.49-.65.82-.39L12 11.8l8.18-6.71c.33-.26.82-.03.82.39z" />
		</svg>
	);
};

IconLogoGmail.iconName = "logo-gmail";

export default IconLogoGmail;
