import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWaveLinkColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fill="url(#prefix__a)"
						d="M1 4.5A3.5 3.5 0 0 1 4.5 1h7A3.5 3.5 0 0 1 15 4.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 1 11.5z"
					/>
					<path
						fill="#fff"
						d="M8 3.333c.242 0 .438.196.438.438v8.458a.438.438 0 0 1-.875 0V3.771c0-.242.196-.438.438-.438M3.771 5.083c.242 0 .438.196.438.438v4.958a.438.438 0 0 1-.875 0V5.521c0-.242.196-.438.437-.438M10.115 5.083c.242 0 .438.196.438.438v4.958a.437.437 0 1 1-.875 0V5.521c0-.242.196-.438.437-.438M5.886 6.833c.242 0 .438.196.438.438v1.458a.438.438 0 0 1-.875 0V7.271c0-.242.195-.438.437-.438M12.23 6.833c.241 0 .437.196.437.438v1.458a.438.438 0 0 1-.875 0V7.271c0-.242.196-.438.438-.438"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={1} x2={15} y1={1} y2={15} gradientUnits="userSpaceOnUse">
							<stop stopColor="#17A9E5" />
							<stop offset={1} stopColor="#44CB62" />
						</linearGradient>
					</defs>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path fill="url(#prefix__a)" d="M2 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
					<path
						fill="#fff"
						d="M10.001 4.667a.5.5 0 0 1 .5.5v9.666a.5.5 0 1 1-1 0V5.167a.5.5 0 0 1 .5-.5M5.168 6.667a.5.5 0 0 1 .5.5v5.666a.5.5 0 1 1-1 0V7.167a.5.5 0 0 1 .5-.5M12.418 6.667a.5.5 0 0 1 .5.5v5.666a.5.5 0 1 1-1 0V7.167a.5.5 0 0 1 .5-.5M7.585 8.667a.5.5 0 0 1 .5.5v1.666a.5.5 0 1 1-1 0V9.167a.5.5 0 0 1 .5-.5M14.835 8.667a.5.5 0 0 1 .5.5v1.666a.5.5 0 1 1-1 0V9.167a.5.5 0 0 1 .5-.5"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={2} x2={18} y1={2} y2={18} gradientUnits="userSpaceOnUse">
							<stop stopColor="#17A9E5" />
							<stop offset={1} stopColor="#44CB62" />
						</linearGradient>
					</defs>
				</svg>
			);
	}
};

IconLogoWaveLinkColor.iconName = "logo-wave-link--color";

export default IconLogoWaveLinkColor;
