import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightMiniPowerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5h.75a.75.75 0 0 1 0 1.5H22v2h.75a.75.75 0 0 1 0 1.5h-.126a6.5 6.5 0 0 0-2.124-1.768V7a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h7q.002.776.174 1.5H4a2 2 0 0 1-2-2z" />
			<path d="M19 8v3.174A6.503 6.503 0 0 0 11.174 16H5V8z" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.891-2.333a.5.5 0 1 0-.746.666 2.5 2.5 0 1 1-3.727.002.5.5 0 0 0-.746-.667 3.5 3.5 0 1 0 5.219-.001M17.5 14a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyLightMiniPowerFilled.iconName = "key-light-mini-power--filled";

export default IconKeyLightMiniPowerFilled;
