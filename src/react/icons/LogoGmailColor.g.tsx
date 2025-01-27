import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGmailColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#C5221F" d="M1 5.75v2l2.294 2.22L6 11.5l.5-3.366L6 5 4.6 3.95C3.116 2.838 1 3.896 1 5.75" />
			<path fill="#FFBA00" d="m18 5-.5 3.175.5 3.325 2.456-1.216L23 7.75v-2c0-1.854-2.116-2.912-3.6-1.8z" />
			<path fill="#2684FC" d="M2.5 20H6v-8.5L1 7.75V18.5A1.5 1.5 0 0 0 2.5 20" />
			<path fill="#00AC47" d="M18 20h3.5a1.5 1.5 0 0 0 1.5-1.5V7.75l-5 3.75z" />
			<path fill="#E94235" d="M12 9.5 6 5v6.5l6 4.5 6-4.5V5z" />
		</svg>
	);
};

IconLogoGmailColor.iconName = "logo-gmail--color";

export default IconLogoGmailColor;
