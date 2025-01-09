import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLightStripPowerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 7v.277c.01.698.341 1.381.955 1.813l.071.05A4.5 4.5 0 0 1 7.5 7.5H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4m12.5-2.5H17V6h-1.5zm-2.5 0h-1.5V6H13zm-5.5 0H9V6H7.5z"
				clipRule="evenodd"
			/>
			<path d="M5.379 9.879a3 3 0 0 0-.12.128l6.45 4.539a6.52 6.52 0 0 1 3.416-3.098L11.647 9H7.5a3 3 0 0 0-2.121.879" />
			<path
				fillRule="evenodd"
				d="M5 16.5h6.076a6.6 6.6 0 0 0-.057 1.5H11v1.5h.313c.173.534.412 1.037.709 1.5H5a2 2 0 0 1-2-2v-.5a2 2 0 0 1 2-2m2 3h1.5V18H7zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.891-2.333a.5.5 0 1 0-.746.666 2.5 2.5 0 1 1-3.727.002.5.5 0 0 0-.746-.667 3.5 3.5 0 1 0 5.219-.001M17.5 14a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLightStripPowerFilled.iconName = "light-strip-power--filled";

export default IconLightStripPowerFilled;
