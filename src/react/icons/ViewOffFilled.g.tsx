import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconViewOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M17.854 2.854a.5.5 0 0 0-.708-.708l-15 15a.5.5 0 0 0 .708.708l2.91-2.911A8.96 8.96 0 0 0 10 16a9 9 0 0 0 8.226-5.344 1.62 1.62 0 0 0 0-1.313 9.04 9.04 0 0 0-3.112-3.75zm-5.409 5.408-.722.722a2 2 0 0 1-2.74 2.74l-.721.721a3 3 0 0 0 4.184-4.184"
						clipRule="evenodd"
					/>
					<path d="M10 4c1.152 0 2.254.217 3.267.611l-2.49 2.49a3 3 0 0 0-3.675 3.675L4.09 13.79a9 9 0 0 1-2.316-3.132 1.61 1.61 0 0 1 0-1.313A9 9 0 0 1 10 4" />
				</svg>
			);
	}
};

IconViewOffFilled.iconName = "view-off--filled";

export default IconViewOffFilled;
