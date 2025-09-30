import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCamera = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12ZM15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.39951 2.75061L7.15012 4.31235C7.05524 4.43096 6.91158 4.5 6.75969 4.5H4C2.89543 4.5 2 5.39543 2 6.5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V6.5C22 5.39543 21.1046 4.5 20 4.5H17.2403C17.0884 4.5 16.9448 4.43096 16.8499 4.31235L15.6005 2.75061C15.2209 2.27618 14.6463 2 14.0388 2H9.96125C9.35368 2 8.77906 2.27618 8.39951 2.75061ZM3.5 19V6.5C3.5 6.22386 3.72386 6 4 6H6.75969C7.36726 6 7.94188 5.72382 8.32142 5.24939L9.57082 3.68765C9.6657 3.56904 9.80936 3.5 9.96125 3.5H14.0388C14.1906 3.5 14.3343 3.56904 14.4292 3.68765L15.6786 5.24939C16.0581 5.72382 16.6327 6 17.2403 6H20C20.2761 6 20.5 6.22386 20.5 6.5V19C20.5 19.2761 20.2761 19.5 20 19.5H4C3.72386 19.5 3.5 19.2761 3.5 19Z"
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.9 2.8L6.3 3.6C6.11115 3.85181 5.81476 4 5.5 4H4C2.89543 4 2 4.89543 2 6V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V6C18 4.89543 17.1046 4 16 4H14.5C14.1852 4 13.8889 3.85181 13.7 3.6L13.1 2.8C12.7223 2.29639 12.1295 2 11.5 2H8.5C7.87049 2 7.27771 2.29639 6.9 2.8ZM17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15V6C3 5.44772 3.44772 5 4 5H5.5C6.12952 5 6.72229 4.70361 7.1 4.2L7.7 3.4C7.88885 3.14819 8.18524 3 8.5 3H11.5C11.8148 3 12.1111 3.14819 12.3 3.4L12.9 4.2C13.2777 4.70361 13.8705 5 14.5 5H16C16.5523 5 17 5.44772 17 6V15Z"
					/>
				</svg>
			);
	}
};

IconCamera.iconName = "camera";

export default IconCamera;
