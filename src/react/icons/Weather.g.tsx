import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWeather = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M10.5 8a6.5 6.5 0 0 1 6.01 4.025A5 5 0 0 1 16 22H6.5a4.5 4.5 0 0 1-2.453-8.272A6.5 6.5 0 0 1 10.5 8m0 1.5a5 5 0 0 0-4.93 4.173l-.034.231-.082.697-.588.383A3 3 0 0 0 6.5 20.5H16a3.5 3.5 0 0 0 .36-6.982l-.894-.091-.342-.83A5 5 0 0 0 10.5 9.5"
						clipRule="evenodd"
					/>
					<path d="M14.75 5a4.25 4.25 0 0 1 4.129 5.254.75.75 0 1 1-1.457-.354q.077-.315.078-.65a2.75 2.75 0 0 0-4.027-2.436.751.751 0 0 1-.7-1.328A4.24 4.24 0 0 1 14.75 5M22.25 8.5a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zM19.523 3.416a.75.75 0 0 1 1.061 1.062l-.707.707a.751.751 0 0 1-1.062-1.061zM8.916 3.416a.75.75 0 0 1 1.06 0l.708.707a.751.751 0 0 1-1.061 1.062l-.707-.708a.75.75 0 0 1 0-1.061M14.75 1a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" />
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
					<path
						fillRule="evenodd"
						d="M9 7a5 5 0 0 1 4.604 3.045A4.001 4.001 0 0 1 13 18H5.5a3.5 3.5 0 0 1-1.453-6.685A5 5 0 0 1 9 7m0 1c-1.96 0-3.59 1.41-3.934 3.27l-.028.181-.075.545-.5.229A2.501 2.501 0 0 0 5.5 17H13a3 3 0 0 0 .454-5.967l-.553-.083-.217-.513A4 4 0 0 0 9 8"
						clipRule="evenodd"
					/>
					<path d="M12.5 4a3.5 3.5 0 0 1 3.075 5.17.5.5 0 0 1-.879-.478 2.5 2.5 0 0 0-3.954-2.97l-.183.202a.5.5 0 1 1-.776-.631l.124-.145A3.5 3.5 0 0 1 12.5 4M18.5 7a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM7.903 2.903a.5.5 0 0 1 .707 0l.707.708a.5.5 0 1 1-.707.707l-.707-.707a.5.5 0 0 1 0-.708M16.389 2.904a.501.501 0 0 1 .708.707l-.708.707a.5.5 0 0 1-.707-.707zM12.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" />
				</svg>
			);
	}
};

IconWeather.iconName = "weather";

export default IconWeather;
