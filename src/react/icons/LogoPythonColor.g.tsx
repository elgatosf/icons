import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoPythonColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11.882 2c-.815.004-1.594.074-2.28.195-2.019.357-2.385 1.103-2.385 2.48v1.818h4.771V7.1H5.426c-1.387 0-2.6.833-2.98 2.419-.439 1.817-.458 2.951 0 4.849.338 1.412 1.148 2.419 2.535 2.419h1.64v-2.18c0-1.575 1.363-2.964 2.981-2.964h4.766c1.327 0 2.386-1.092 2.386-2.425V4.675c0-1.293-1.091-2.264-2.386-2.48-.82-.137-1.67-.199-2.486-.195m-2.58 1.463c.493 0 .895.409.895.912a.9.9 0 0 1-.895.906.9.9 0 0 1-.895-.906c0-.503.4-.912.895-.912"
			/>
			<path
				fill="url(#prefix__b)"
				d="M17.348 7.1v2.118c0 1.643-1.393 3.026-2.98 3.026H9.601c-1.306 0-2.386 1.117-2.386 2.424v4.544c0 1.293 1.124 2.053 2.386 2.424 1.51.444 2.958.524 4.765 0 1.201-.348 2.386-1.048 2.386-2.424v-1.819h-4.766v-.606h7.152c1.386 0 1.903-.967 2.385-2.42.498-1.494.477-2.931 0-4.848-.342-1.38-.997-2.42-2.385-2.42zm-2.68 11.505a.9.9 0 0 1 .895.907c0 .503-.4.912-.895.912a.905.905 0 0 1-.896-.912c0-.501.403-.907.896-.907"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={2.109} x2={13.112} y1={2} y2={11.376} gradientUnits="userSpaceOnUse">
					<stop stopColor="#5A9FD4" />
					<stop offset={1} stopColor="#306998" />
				</linearGradient>
				<linearGradient id="prefix__b" x1={14.553} x2={10.606} y1={19.359} y2={13.828} gradientUnits="userSpaceOnUse">
					<stop stopColor="#FFD43B" />
					<stop offset={1} stopColor="#FFE873" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoPythonColor.iconName = "logo-python--color";

export default IconLogoPythonColor;
