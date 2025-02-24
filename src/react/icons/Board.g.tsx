import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBoard = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M14.5 5.5h-5v13h5zm1.5 0v13h4a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5zm-12 0h4v13H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
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
					<path
						fillRule="evenodd"
						d="M10 4H6v8h4zm-.5-1H13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.5m1.5 9h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2zm-8 0h2V4H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1"
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
					<path
						fillRule="evenodd"
						d="M12 5H8v10h4zm1 0v10h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM4 5h3v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m0-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconBoard.iconName = "board";

export default IconBoard;
