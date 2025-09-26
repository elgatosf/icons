import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSteamDeckColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#000"
				fillRule="evenodd"
				d="M15.91 12A6.41 6.41 0 0 0 9.5 5.59V2c5.523 0 10 4.477 10 10s-4.477 10-10 10v-3.59A6.41 6.41 0 0 0 15.91 12"
				clipRule="evenodd"
			/>
			<path fill="url(#prefix__a)" d="M9.5 17.01a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
			<defs>
				<linearGradient id="prefix__a" x1={0.653} x2={12.397} y1={8.857} y2={14.527} gradientUnits="userSpaceOnUse">
					<stop offset={0.107} stopColor="#C957E6" />
					<stop offset={1} stopColor="#1A9FFF" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoSteamDeckColor.iconName = "logo-steam-deck--color";

export default IconLogoSteamDeckColor;
