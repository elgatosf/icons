import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBold = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6 5a2 2 0 0 1 2-2h5a5 5 0 0 1 3.675 8.39A5.25 5.25 0 0 1 13.75 21H8a2 2 0 0 1-2-2zm9.5 3a2.5 2.5 0 0 1-2.5 2.5H8.5v-5H13A2.5 2.5 0 0 1 15.5 8m-7 5v5.5h5.25a2.75 2.75 0 1 0 0-5.5z"
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
						d="M5 3.75A.75.75 0 0 1 5.75 3h4.5a3.75 3.75 0 0 1 2.6 6.453A4 4 0 0 1 11 17H5.75a.75.75 0 0 1-.75-.75zM10.25 9a2.25 2.25 0 0 0 0-4.5H6.5V9zM6.5 10.5v5H11a2.5 2.5 0 0 0 0-5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconBold.iconName = "bold";

export default IconBold;
