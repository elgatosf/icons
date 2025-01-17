import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBold = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5 3.75A.75.75 0 0 1 5.75 3h4.5a3.75 3.75 0 0 1 2.6 6.453A4 4 0 0 1 11 17H5.75a.75.75 0 0 1-.75-.75zM10.25 9a2.25 2.25 0 0 0 0-4.5H6.5V9zM6.5 10.5v5H11a2.5 2.5 0 0 0 0-5z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconBold.iconName = "bold";

export default IconBold;
