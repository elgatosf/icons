import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBoardFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3.5V4zM9 4v16h6V4zM16.5 4v16H20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
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
					<path d="M10 3H6v10h4zM11 13h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2zM3 3h2v10H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" />
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
					<path d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3V4zM8 4v12h4V4zM13 4v12h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
				</svg>
			);
	}
};

IconBoardFilled.iconName = "board--filled";

export default IconBoardFilled;
