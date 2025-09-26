import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSearch = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M15.247 16.307a7.5 7.5 0 1 1 1.06-1.06l4.473 4.473a.75.75 0 1 1-1.06 1.06zM16.5 10.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
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
					<path
						fillRule="evenodd"
						d="M12.874 13.582a6 6 0 1 1 .707-.707l3.273 3.271a.5.5 0 0 1-.708.708zM14 9A5 5 0 1 1 4 9a5 5 0 0 1 10 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSearch.iconName = "search";

export default IconSearch;
