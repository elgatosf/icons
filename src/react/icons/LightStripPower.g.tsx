import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLightStripPower = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 7v.277c.01.698.341 1.381.955 1.813l7.753 5.456q.347-.675.833-1.248L5.2 8.132a4.5 4.5 0 0 1 1.755-.6l6.708 4.721c.447-.328.938-.6 1.462-.805L9.515 7.5H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4m4-2.5h.5V6l-.115.001a6 6 0 0 0-2.374.538.8.8 0 0 0-.161.077 6 6 0 0 0-.342.182A2.497 2.497 0 0 1 7 4.5m2 0h2.5V6H9zm6.5 0H13V6h2.5zm3.5 0h-2V6h2a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5M5 16.5h6.076q-.075.49-.076 1a6.47 6.47 0 0 0 1.022 3.5H5a2 2 0 0 1-2-2v-.5a2 2 0 0 1 2-2m2 3H5a.5.5 0 0 1-.5-.5v-.5A.5.5 0 0 1 5 18h2zm1.5 0V18H11v1.5z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.891-2.333a.5.5 0 1 0-.746.666 2.5 2.5 0 1 1-3.727.002.5.5 0 0 0-.746-.667 3.5 3.5 0 1 0 5.219-.001M17.5 14a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLightStripPower.iconName = "light-strip-power";

export default IconLightStripPower;
