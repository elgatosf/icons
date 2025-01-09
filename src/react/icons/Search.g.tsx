import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSearch = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
