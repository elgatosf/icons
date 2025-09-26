import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStreamDeckColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3.771 10.09a.73.73 0 1 1 0 1.46.73.73 0 0 1 0-1.46M6.591 10.09a.73.73 0 1 1 0 1.46.73.73 0 0 1 0-1.46M9.41 10.09a.73.73 0 1 1 0 1.46.73.73 0 0 1 0-1.46M12.23 10.09a.73.73 0 1 1 0 1.46.73.73 0 0 1 0-1.46M3.771 7.27a.73.73 0 1 1 0 1.46.73.73 0 0 1 0-1.46M6.591 7.27a.73.73 0 1 1 0 1.46.73.73 0 0 1 0-1.46M9.41 7.27a.73.73 0 1 1 0 1.46.73.73 0 0 1 0-1.46M12.23 7.27a.73.73 0 1 1 0 1.46.73.73 0 0 1 0-1.46M3.771 4.452a.73.73 0 1 1 0 1.459.73.73 0 0 1 0-1.46M6.591 4.452a.73.73 0 1 1 0 1.459.73.73 0 0 1 0-1.46M9.41 4.452a.73.73 0 1 1 0 1.459.73.73 0 0 1 0-1.46M12.23 4.452a.73.73 0 1 1 0 1.459.73.73 0 0 1 0-1.46"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={1} x2={15} y1={1} y2={15} gradientUnits="userSpaceOnUse">
							<stop stopColor="#204CFE" />
							<stop offset={1} stopColor="#A638FE" />
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
						d="M5.167 12.389a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667M8.39 12.389a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667M11.613 12.389a.834.834 0 1 1-.001 1.667.834.834 0 0 1 0-1.667M14.835 12.389a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667M5.167 9.167a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667M8.39 9.167a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667M11.613 9.167a.834.834 0 1 1-.001 1.667.834.834 0 0 1 0-1.667M14.835 9.167a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667M5.167 5.945a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667M8.39 5.945a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667M11.613 5.945a.834.834 0 1 1-.001 1.667.834.834 0 0 1 0-1.667M14.835 5.945a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={2} x2={18} y1={2} y2={18} gradientUnits="userSpaceOnUse">
							<stop stopColor="#204CFE" />
							<stop offset={1} stopColor="#A638FE" />
						</linearGradient>
					</defs>
				</svg>
			);
	}
};

IconLogoStreamDeckColor.iconName = "logo-stream-deck--color";

export default IconLogoStreamDeckColor;
