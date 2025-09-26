import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCloseSquare = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.72 16.28a.75.75 0 0 1 0-1.06L10.94 12 7.72 8.78a.75.75 0 0 1 1.06-1.06L12 10.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L13.06 12l3.22 3.22a.75.75 0 1 1-1.06 1.06L12 13.06l-3.22 3.22a.75.75 0 0 1-1.06 0" />
					<path
						fillRule="evenodd"
						d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm14 1.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"
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
					<path d="M5.146 5.146a.5.5 0 0 1 .708 0L8 7.293l2.146-2.147a.5.5 0 0 1 .708.708L8.707 8l2.147 2.146a.5.5 0 0 1-.708.708L8 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L7.293 8 5.146 5.854a.5.5 0 0 1 0-.708" />
					<path
						fillRule="evenodd"
						d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1"
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
					<path d="M6.646 6.646a.5.5 0 0 1 .708 0L10 9.293l2.646-2.647a.5.5 0 0 1 .708.708L10.707 10l2.647 2.646a.5.5 0 0 1-.708.708L10 10.707l-2.646 2.647a.5.5 0 0 1-.708-.708L9.293 10 6.646 7.354a.5.5 0 0 1 0-.708" />
					<path
						fillRule="evenodd"
						d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCloseSquare.iconName = "close-square";

export default IconCloseSquare;
