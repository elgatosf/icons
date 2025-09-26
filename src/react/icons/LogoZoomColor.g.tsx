import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoZoomColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fill="url(#prefix__a)"
				fillRule="evenodd"
				d="M21.75 15.14a19.8 19.8 0 0 0 0-6.28 8 8 0 0 0-6.61-6.61 19.8 19.8 0 0 0-6.28 0 8 8 0 0 0-6.61 6.61 19.8 19.8 0 0 0 0 6.28 8 8 0 0 0 6.61 6.61 19.8 19.8 0 0 0 6.28 0 8 8 0 0 0 6.61-6.61"
				clipRule="evenodd"
			/>
			<path
				fill="#fff"
				d="M7.972 13.531h-2.48a.428.428 0 0 1-.304-.732l1.719-1.718H5.675a.613.613 0 0 1-.612-.612H7.35a.428.428 0 0 1 .303.732l-1.718 1.718H7.36c.338 0 .612.274.612.612"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M11.066 12a1.577 1.577 0 1 1-3.155 0 1.577 1.577 0 0 1 3.155 0m-1.578-.965a.965.965 0 1 1 0 1.93.965.965 0 0 1 0-1.93M14.465 12a1.577 1.577 0 1 1-3.154 0 1.577 1.577 0 0 1 3.154 0m-1.577-.965a.965.965 0 1 1 0 1.93.965.965 0 0 1 0-1.93"
				clipRule="evenodd"
			/>
			<path
				fill="#fff"
				d="M18.937 11.617a1.196 1.196 0 0 0-2.083-.798 1.196 1.196 0 0 0-2.083.798v1.914a.613.613 0 0 0 .613-.612v-1.302a.583.583 0 0 1 1.164 0v1.302c0 .338.274.612.613.612v-1.914a.583.583 0 0 1 1.163 0v1.302c0 .338.275.612.613.612z"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={6.733} x2={17.267} y1={21.122} y2={2.878} gradientUnits="userSpaceOnUse">
					<stop stopColor="#0845BF" />
					<stop offset={0.6} stopColor="#0B5CFF" />
					<stop offset={1} stopColor="#4F90EE" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoZoomColor.iconName = "logo-zoom--color";

export default IconLogoZoomColor;
