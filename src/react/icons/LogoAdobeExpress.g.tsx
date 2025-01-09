import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeExpress = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M6.035 3h11.93a3.266 3.266 0 0 1 3.266 3.267v11.466A3.266 3.266 0 0 1 17.965 21H6.035a3.266 3.266 0 0 1-3.265-3.267V6.267A3.266 3.266 0 0 1 6.035 3m5.984 3.985c.838 0 1.594.502 1.92 1.273l2.654 6.282a1.3 1.3 0 0 1-1.199 1.81c-.44-.002-.939-.196-1.2-.793l-1.91-4.466a.289.289 0 0 0-.537.002l-.936 2.23a.297.297 0 0 0 .273.413l.502-.003a1.31 1.31 0 0 1 .004 2.617H8.653c-.93 0-1.56-.949-1.198-1.807l2.637-6.28a2.09 2.09 0 0 1 1.927-1.278"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAdobeExpress.iconName = "logo-adobe-express";

export default IconLogoAdobeExpress;
