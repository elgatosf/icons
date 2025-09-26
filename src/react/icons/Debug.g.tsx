import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDebug = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M7 13c1.267 0 2.396.59 3.129 1.51q.06-.01.121-.01h2a.75.75 0 0 1 0 1.5h-1.376q.124.48.126 1v.25h1.25a.75.75 0 0 1 0 1.5H11V19l-.005.206a4 4 0 0 1-.121.794h1.376a.75.75 0 0 1 0 1.5h-2a1 1 0 0 1-.12-.011A4 4 0 0 1 7 22.999a4 4 0 0 1-3.13-1.51 1 1 0 0 1-.12.01h-2a.75.75 0 0 1 0-1.5h1.376a4 4 0 0 1-.121-.793L3 19v-.25H1.75a.75.75 0 0 1 0-1.5H3V17q.002-.52.126-1H1.75a.75.75 0 0 1 0-1.5h2.129A4 4 0 0 1 7 13m-2.5 6a2.5 2.5 0 0 0 5 0v-1h-5zM7 14.5c-1.21 0-2.218.859-2.45 2h4.9a2.5 2.5 0 0 0-2.45-2"
						clipRule="evenodd"
					/>
					<path d="M5 5.072C5 3.532 6.667 2.57 8 3.34l12 6.928c1.333.77 1.333 2.694 0 3.464l-4.429 2.556a.75.75 0 0 1-.749-1.3l4.428-2.555a.5.5 0 0 0 0-.866l-12-6.929a.5.5 0 0 0-.75.434v5.856a.75.75 0 1 1-1.5 0z" />
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
						d="M6 11c1.306 0 2.414.835 2.826 2H10a.5.5 0 0 1 0 1H9v1h1l.1.01a.501.501 0 0 1 0 .98L10 16H9c0 .35-.063.687-.174 1H10a.5.5 0 0 1 0 1H8.231a2.99 2.99 0 0 1-4.462 0H2a.5.5 0 0 1 0-1h1.174A3 3 0 0 1 3 16H2a.5.5 0 0 1 0-1h1v-1H2a.5.5 0 0 1 0-1h1.174c.412-1.165 1.52-2 2.826-2m-2 5a2 2 0 0 0 4 0v-1H4zm2-4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2"
						clipRule="evenodd"
					/>
					<path d="M4 4.803c0-1.539 1.667-2.5 3-1.731l9 5.196.121.075c1.172.788 1.172 2.526 0 3.313L16 11.73l-3.752 2.167a.5.5 0 0 1-.5-.866l3.752-2.166.117-.08c.51-.395.51-1.178 0-1.573l-.117-.08-9-5.196a1 1 0 0 0-1.5.866v4.954a.5.5 0 0 1-1 0z" />
				</svg>
			);
	}
};

IconDebug.iconName = "debug";

export default IconDebug;
