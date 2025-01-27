import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCheckmarkCircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.854-9.146a.5.5 0 0 0-.708-.708L6.5 9.793 4.354 7.646a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0z"
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
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m3.854-10.146a.5.5 0 0 0-.708-.708L8.5 11.793 6.354 9.646a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCheckmarkCircleFilled.iconName = "checkmark-circle--filled";

export default IconCheckmarkCircleFilled;
