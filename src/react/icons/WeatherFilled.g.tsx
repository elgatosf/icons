import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWeatherFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M10.5 8a6.5 6.5 0 0 1 6.01 4.025A5 5 0 0 1 16 22H6.5a4.5 4.5 0 0 1-2.453-8.272A6.5 6.5 0 0 1 10.5 8M14.75 5a4.25 4.25 0 0 1 4.104 5.357c-.107.393-.548.552-.937.431a6 6 0 0 0-.388-.106 8.02 8.02 0 0 0-4.731-3.846c-.567-.17-.818-.864-.318-1.18A4.23 4.23 0 0 1 14.75 5M22.25 8.5a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zM19.523 3.416a.75.75 0 0 1 1.061 1.062l-.707.707a.751.751 0 0 1-1.062-1.061zM8.916 3.416a.75.75 0 0 1 1.06 0l.708.707a.751.751 0 0 1-1.061 1.062l-.707-.708a.75.75 0 0 1 0-1.061M14.75 1a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" />
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M9 7a5 5 0 0 1 4.604 3.045A4.001 4.001 0 0 1 13 18H5.5a3.5 3.5 0 0 1-1.453-6.685A5 5 0 0 1 9 7M12.5 4a3.5 3.5 0 0 1 3.053 5.21c-.121.216-.395.273-.622.178a5 5 0 0 0-.641-.219 6 6 0 0 0-4.222-3.072c-.349-.063-.568-.438-.352-.72A3.5 3.5 0 0 1 12.5 4M18.5 7a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM7.903 2.903a.5.5 0 0 1 .707 0l.707.708a.5.5 0 1 1-.707.707l-.707-.707a.5.5 0 0 1 0-.708M16.389 2.904a.501.501 0 0 1 .708.707l-.708.707a.5.5 0 0 1-.707-.707zM12.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" />
				</svg>
			);
	}
};

IconWeatherFilled.iconName = "weather--filled";

export default IconWeatherFilled;
