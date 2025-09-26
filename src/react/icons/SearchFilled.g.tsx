import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSearchFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" />
					<path
						fillRule="evenodd"
						d="M16.307 15.247a7.5 7.5 0 1 0-1.06 1.06l4.473 4.473a.75.75 0 1 0 1.06-1.06zM10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
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
					<path d="M7 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
					<path
						fillRule="evenodd"
						d="M7 2a5 5 0 0 1 3.871 8.164l2.983 2.983.064.078a.5.5 0 0 1-.693.693l-.079-.064-2.982-2.983A5 5 0 1 1 7 2m0 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
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
					<path d="M13 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
					<path
						fillRule="evenodd"
						d="M13.582 12.874a6 6 0 1 0-.707.707l3.271 3.273a.5.5 0 0 0 .708-.708zM9 14A5 5 0 1 0 9 4a5 5 0 0 0 0 10"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSearchFilled.iconName = "search--filled";

export default IconSearchFilled;
