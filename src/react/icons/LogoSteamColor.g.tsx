import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSteamColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.417 14.875C3.655 18.997 7.477 22 12 22c5.521 0 10-4.478 10-10s-4.478-10-10-10S2.36 6.122 2.02 11.334c.646 1.088.9 1.76.396 3.541"
			/>
			<path
				fill="#fff"
				d="M11.482 9.497v.05l-2.447 3.556a2.77 2.77 0 0 0-1.64.456l-5.372-2.218s-.125 2.047.394 3.568l3.8 1.57a2.76 2.76 0 0 0 1.637 1.959 2.774 2.774 0 0 0 3.838-2.638l3.497-2.503h.087a3.802 3.802 0 0 0 0-7.606 3.804 3.804 0 0 0-3.797 3.803zm-.587 7.2a2.134 2.134 0 0 1-3.897.103l1.237.512a1.576 1.576 0 0 0 1.21-2.912l-1.281-.528a2.12 2.12 0 0 1 1.578.025 2.12 2.12 0 0 1 1.156 1.162 2.13 2.13 0 0 1-.003 1.641m4.387-4.669a2.54 2.54 0 0 1-2.53-2.534 2.537 2.537 0 0 1 2.53-2.534 2.537 2.537 0 0 1 2.532 2.534 2.537 2.537 0 0 1-2.532 2.534m-1.896-2.54c0-1.05.85-1.903 1.9-1.903a1.904 1.904 0 0 1 0 3.806c-1.05 0-1.9-.853-1.9-1.903"
			/>
			<defs>
				<linearGradient id="prefix__a" x1={9.625} x2={9.625} y1={2.05} y2={22.05} gradientUnits="userSpaceOnUse">
					<stop stopColor="#111D2E" />
					<stop offset={0.21} stopColor="#051839" />
					<stop offset={0.41} stopColor="#0A1B48" />
					<stop offset={0.58} stopColor="#132E62" />
					<stop offset={0.74} stopColor="#144B7E" />
					<stop offset={0.87} stopColor="#136497" />
					<stop offset={1} stopColor="#1387B8" />
				</linearGradient>
			</defs>
		</svg>
	);
};

IconLogoSteamColor.iconName = "logo-steam--color";

export default IconLogoSteamColor;
