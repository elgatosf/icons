import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoChromeColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<g clipPath="url(#prefix__a)">
				<path
					fill="url(#prefix__b)"
					d="M11.999 7h8.659A9.998 9.998 0 0 0 3.339 7l4.33 7.5.004-.001a4.994 4.994 0 0 1 4.326-7.5"
				/>
				<path
					fill="url(#prefix__c)"
					d="m16.33 14.5-4.329 7.498A9.998 9.998 0 0 0 20.66 6.999h-8.658l-.002.004a4.994 4.994 0 0 1 4.332 7.496"
				/>
				<path
					fill="url(#prefix__d)"
					d="M7.67 14.501 3.34 7.002A9.998 9.998 0 0 0 12 22l4.33-7.499-.002-.003a4.994 4.994 0 0 1-8.658.003"
				/>
				<path fill="#fff" d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
				<path fill="#1A73E8" d="M12 15.958a3.958 3.958 0 1 0 0-7.916 3.958 3.958 0 0 0 0 7.916" />
			</g>
			<defs>
				<linearGradient id="prefix__b" x1={19.577} x2={10.918} y1={6.376} y2={21.374} gradientUnits="userSpaceOnUse">
					<stop stopColor="#D93025" />
					<stop offset={1} stopColor="#EA4335" />
				</linearGradient>
				<linearGradient id="prefix__c" x1={21.227} x2={3.909} y1={8.25} y2={8.25} gradientUnits="userSpaceOnUse">
					<stop stopColor="#FCC934" />
					<stop offset={1} stopColor="#FBBC04" />
				</linearGradient>
				<linearGradient id="prefix__d" x1={13.082} x2={4.423} y1={21.376} y2={6.377} gradientUnits="userSpaceOnUse">
					<stop stopColor="#1E8E3E" />
					<stop offset={1} stopColor="#34A853" />
				</linearGradient>
				<clipPath id="prefix__a">
					<path fill="#fff" d="M0 0h24v24H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};

IconLogoChromeColor.iconName = "logo-chrome--color";

export default IconLogoChromeColor;
