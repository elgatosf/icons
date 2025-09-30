import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2 6.5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V6.5C22 5.39543 21.1046 4.5 20 4.5H17.2403C17.0884 4.5 16.9448 4.43096 16.8499 4.31235L15.6005 2.75061C15.2209 2.27618 14.6463 2 14.0388 2H9.96125C9.35368 2 8.77906 2.27618 8.39951 2.75061L7.15012 4.31235C7.05524 4.43096 6.91158 4.5 6.75969 4.5H4C2.89543 4.5 2 5.39543 2 6.5ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
					/>
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2 15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V6C18 4.89543 17.1046 4 16 4H14.5C14.1852 4 13.8889 3.85181 13.7 3.6L13.1 2.8C12.7223 2.29639 12.1295 2 11.5 2H8.5C7.87049 2 7.27771 2.29639 6.9 2.8L6.3 3.6C6.11115 3.85181 5.81476 4 5.5 4H4C2.89543 4 2 4.89543 2 6V15ZM14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"
					/>
				</svg>
			);
	}
};

IconCameraFilled.iconName = "camera--filled";

export default IconCameraFilled;
