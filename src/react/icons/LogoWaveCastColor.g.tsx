import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWaveCastColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5.91 5.375c.242 0 .437.196.437.438v6.416a.438.438 0 0 1-.875 0V5.813c0-.242.196-.438.438-.438"
					/>
					<path
						fill="#fff"
						d="M10.917 3.333c.967 0 1.75.784 1.75 1.75v5.834a1.75 1.75 0 0 1-1.75 1.75H9.605a.438.438 0 0 1 0-.875h1.312a.875.875 0 0 0 .875-.875V5.083a.875.875 0 0 0-.875-.875H5.084a.875.875 0 0 0-.875.875v1.313a.437.437 0 1 1-.875 0V5.083c0-.966.783-1.75 1.75-1.75z"
					/>
					<path
						fill="#fff"
						d="M8.049 6.542c.241 0 .437.196.437.437v4.084a.437.437 0 1 1-.875 0V6.979c0-.241.196-.437.438-.437M3.771 8c.242 0 .438.196.438.438v1.166a.437.437 0 0 1-.875 0V8.438c0-.242.196-.438.437-.438M10.187 8c.242 0 .438.196.438.438v1.166a.438.438 0 0 1-.875 0V8.438c0-.242.195-.438.437-.438"
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
					<path fill="#fff" d="M7.612 7a.5.5 0 0 1 .5.5v7.333a.5.5 0 1 1-1 0V7.5a.5.5 0 0 1 .5-.5" />
					<path
						fill="#fff"
						d="M13.335 4.667a2 2 0 0 1 2 2v6.666a2 2 0 0 1-2 2h-1.5a.5.5 0 1 1 0-1h1.5a1 1 0 0 0 1-1V6.667a1 1 0 0 0-1-1H6.668a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-1 0v-1.5a2 2 0 0 1 2-2z"
					/>
					<path
						fill="#fff"
						d="M10.056 8.333a.5.5 0 0 1 .5.5V13.5a.5.5 0 0 1-1 0V8.833a.5.5 0 0 1 .5-.5M5.168 10a.5.5 0 0 1 .5.5v1.333a.5.5 0 1 1-1 0V10.5a.5.5 0 0 1 .5-.5M12.5 10a.5.5 0 0 1 .5.5v1.333a.5.5 0 1 1-1 0V10.5a.5.5 0 0 1 .5-.5"
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

IconLogoWaveCastColor.iconName = "logo-wave-cast--color";

export default IconLogoWaveCastColor;
