import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightNeoPowerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.891-2.333a.5.5 0 0 0-.746.666 2.5 2.5 0 1 1-3.727.002.5.5 0 0 0-.746-.667 3.5 3.5 0 1 0 5.219-.001M17.5 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M21 12v-.022c-.969.62-2.112.99-3.34 1.02a6 6 0 0 1-.92 1.681l1.04 1.04a.75.75 0 1 1-1.06 1.061l-1.04-1.04A5.97 5.97 0 0 1 12 17a5.97 5.97 0 0 1-3.68-1.26l-1.04 1.04a.75.75 0 0 1-1.06-1.06l1.04-1.04A5.97 5.97 0 0 1 6 11c0-1.387.47-2.663 1.26-3.68L6.22 6.28a.75.75 0 0 1 1.06-1.06l1.04 1.04a5.97 5.97 0 0 1 2.84-1.202A6.5 6.5 0 0 1 12.81 2H11c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 3.545 4.73C3 5.8 3 7.2 3 10v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.37.188.778.311 1.27.392V21a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.153c.492-.08.9-.204 1.27-.392a5 5 0 0 0 2.185-2.185C21 16.2 21 14.8 21 12M8.5 19.976V21a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-1.024C14.811 20 13.994 20 13 20h-2c-.994 0-1.811 0-2.5-.024"
				clipRule="evenodd"
			/>
			<path d="M16.104 12.85A6.5 6.5 0 0 1 11 6.61 4.502 4.502 0 0 0 12 15.5a4.5 4.5 0 0 0 4.104-2.65" />
		</svg>
	);
};

IconKeyLightNeoPowerFilled.iconName = "key-light-neo-power--filled";

export default IconKeyLightNeoPowerFilled;
