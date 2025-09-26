import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoCaptureColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3.771 9.75c.242 0 .438.196.438.438v.729c0 .483.391.875.875.875h.729a.438.438 0 0 1 0 .875h-.73a1.75 1.75 0 0 1-1.75-1.75v-.73c0-.241.196-.437.438-.437M12.23 9.75c.241 0 .437.196.437.438v.729a1.75 1.75 0 0 1-1.75 1.75h-.73a.438.438 0 1 1 0-.875h.73a.875.875 0 0 0 .875-.875v-.73c0-.241.196-.437.437-.437"
					/>
					<path
						fill="#fff"
						fillRule="evenodd"
						d="M5.961 6.738a1.167 1.167 0 0 1 1.674-.966l.074.039L9.75 6.989a1.167 1.167 0 0 1 0 2.021L7.71 10.19a1.167 1.167 0 0 1-1.748-.927l-.003-.083V6.82zm1.31-.17a.292.292 0 0 0-.437.253v2.358c0 .224.243.364.437.252l2.042-1.179a.292.292 0 0 0 0-.505z"
						clipRule="evenodd"
					/>
					<path
						fill="#fff"
						d="M5.813 3.333a.437.437 0 1 1 0 .875h-.73a.875.875 0 0 0-.875.875v.73a.437.437 0 1 1-.875 0v-.73c0-.966.784-1.75 1.75-1.75zM10.917 3.333c.966 0 1.75.784 1.75 1.75v.73a.437.437 0 1 1-.875 0v-.73a.875.875 0 0 0-.875-.875h-.73a.438.438 0 1 1 0-.875z"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={1} x2={15} y1={1} y2={15} gradientUnits="userSpaceOnUse">
							<stop stopColor="#FF3C4E" />
							<stop offset={1} stopColor="#E845BA" />
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
						d="M5.167 12a.5.5 0 0 1 .5.5v.833a1 1 0 0 0 1 1H7.5a.5.5 0 0 1 0 1h-.833a2 2 0 0 1-2-2V12.5a.5.5 0 0 1 .5-.5M14.834 12a.5.5 0 0 1 .5.5v.833a2 2 0 0 1-2 2H12.5a.5.5 0 1 1 0-1h.834a1 1 0 0 0 1-1V12.5a.5.5 0 0 1 .5-.5"
					/>
					<path
						fill="#fff"
						fillRule="evenodd"
						d="M7.67 8.557a1.334 1.334 0 0 1 1.913-1.104l.084.045L12 8.845a1.333 1.333 0 0 1 0 2.31L9.667 12.5a1.333 1.333 0 0 1-1.997-1.059l-.003-.095V8.652zm1.497-.193a.334.334 0 0 0-.5.288v2.695c0 .257.278.417.5.289l2.333-1.347a.333.333 0 0 0 0-.578z"
						clipRule="evenodd"
					/>
					<path
						fill="#fff"
						d="M7.5 4.667a.5.5 0 0 1 0 1h-.833a1 1 0 0 0-1 1V7.5a.5.5 0 0 1-1 0v-.833a2 2 0 0 1 2-2zM13.334 4.667a2 2 0 0 1 2 2V7.5a.5.5 0 0 1-1 0v-.833a1 1 0 0 0-1-1H12.5a.5.5 0 0 1 0-1z"
					/>
					<defs>
						<linearGradient id="prefix__a" x1={2} x2={18} y1={2} y2={18} gradientUnits="userSpaceOnUse">
							<stop stopColor="#FF3C4E" />
							<stop offset={1} stopColor="#E845BA" />
						</linearGradient>
					</defs>
				</svg>
			);
	}
};

IconLogoCaptureColor.iconName = "logo-capture--color";

export default IconLogoCaptureColor;
