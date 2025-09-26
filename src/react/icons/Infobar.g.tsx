import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconInfobar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8.25 11a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5zM18.25 11a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z" />
					<path
						fillRule="evenodd"
						d="M20 7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM4 8.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5z"
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
					<path d="M6 7.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1zM12 7.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
					<path
						fillRule="evenodd"
						d="M13.204 5.01A2 2 0 0 1 15 7v2l-.01.204a2 2 0 0 1-1.786 1.785L13 11H3l-.204-.01A2 2 0 0 1 1.01 9.203L1 9V7a2 2 0 0 1 1.796-1.99L3 5h10zM3 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"
						clipRule="evenodd"
					/>
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
					<path d="M8 9.5a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1zM14 9.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
					<path
						fillRule="evenodd"
						d="M16 6a2 2 0 0 1 2 2v4l-.01.204A2 2 0 0 1 16 14H4l-.204-.01A2 2 0 0 1 2 12V8a2 2 0 0 1 1.796-1.99L4 6zM4 7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconInfobar.iconName = "infobar";

export default IconInfobar;
