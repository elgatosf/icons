import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCheckmarkCircle = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
					<path d="M11.854 5.146a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L6.5 9.793l4.646-4.647a.5.5 0 0 1 .708 0" />
					<path
						fillRule="evenodd"
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m6-7A6 6 0 1 1 2 8a6 6 0 0 1 12 0"
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
					<path d="M13.854 7.854a.5.5 0 0 0-.708-.708L8.5 11.793 6.354 9.646a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0z" />
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-1 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCheckmarkCircle.iconName = "checkmark-circle";

export default IconCheckmarkCircle;
