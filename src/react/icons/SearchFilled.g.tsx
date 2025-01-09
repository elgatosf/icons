import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSearchFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
