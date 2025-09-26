import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowForeground = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M14.541 10.5c1.107 0 1.959.819 1.959 1.938v7.623c0 .98-.812 1.939-1.959 1.939H3.959C2.852 22 2 21.181 2 20.061v-7.623c0-.98.812-1.938 1.959-1.938zM3.5 20a.5.5 0 0 0 .5.5h10.5a.5.5 0 0 0 .5-.5v-5H3.5zm.5-8a.5.5 0 0 0-.5.5v1H15v-1a.5.5 0 0 0-.5-.5z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M20.245 2.01C21.251 2.104 22 2.889 22 3.938v7.624c0 .98-.812 1.938-1.959 1.938H18.75a.75.75 0 0 1 0-1.5H20a.5.5 0 0 0 .5-.5v-5H9v1.75a.75.75 0 0 1-1.5 0V3.938C7.5 2.958 8.312 2 9.459 2h10.582zM9.5 3.5A.5.5 0 0 0 9 4v1h11.5V4a.5.5 0 0 0-.5-.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M9 7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm-7 6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3H2zm1-5a1 1 0 0 0-1 1h8a1 1 0 0 0-1-1zm10-7c1.076 0 2 .924 2 2v4c0 1.076-.924 2-2 2h-.5a.5.5 0 0 1 0-1h.5c.524 0 1-.476 1-1V4H6v1.5a.5.5 0 0 1-1 0V3c0-1.076.924-2 2-2zM7 2c-.524 0-1 .476-1 1h8c0-.524-.476-1-1-1z" />
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
						d="M11.204 9.01A2 2 0 0 1 13 11v5l-.01.204a2 2 0 0 1-1.786 1.785L11 18H4l-.204-.01a2 2 0 0 1-1.785-1.786L2 16v-5a2 2 0 0 1 1.796-1.99L4 9h7zM3 16a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.5H3zm1-6a1 1 0 0 0-1 1v.5h9V11a1 1 0 0 0-1-1z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M16.204 2.01A2 2 0 0 1 18 4v5l-.01.204A2 2 0 0 1 16 11h-1.5a.5.5 0 0 1 0-1H16a1 1 0 0 0 1-1V5.5H8v2a.5.5 0 0 1-1 0V4a2 2 0 0 1 1.796-1.99L9 2h7zM9 3a1 1 0 0 0-1 1v.5h9V4a1 1 0 0 0-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconWindowForeground.iconName = "window-foreground";

export default IconWindowForeground;
