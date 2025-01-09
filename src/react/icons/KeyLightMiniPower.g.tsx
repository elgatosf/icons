import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightMiniPower = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.174A6.5 6.5 0 0 1 11 17.5H4a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v4.732a6.5 6.5 0 0 1 2.124 1.768h.126a.75.75 0 0 0 0-1.5H22v-2h.75a.75.75 0 0 0 0-1.5H22V7a2 2 0 0 0-2-2z" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.891-2.333a.5.5 0 1 0-.746.666 2.5 2.5 0 1 1-3.727.002.5.5 0 0 0-.746-.667 3.5 3.5 0 1 0 5.219-.001M17.5 14a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyLightMiniPower.iconName = "key-light-mini-power";

export default IconKeyLightMiniPower;
