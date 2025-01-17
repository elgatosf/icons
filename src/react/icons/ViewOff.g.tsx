import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconViewOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M17.854 2.854a.5.5 0 0 0-.708-.708l-15 15a.5.5 0 0 0 .708.708l2.91-2.911A8.96 8.96 0 0 0 10 16a9 9 0 0 0 8.226-5.344 1.62 1.62 0 0 0 0-1.313 9.04 9.04 0 0 0-3.112-3.75zm-3.46 3.46a8.03 8.03 0 0 1 2.919 3.436c.07.16.07.34 0 .5A8 8 0 0 1 6.508 14.2l1.754-1.755a3 3 0 0 0 4.184-4.184zm-2.67 2.67a2 2 0 0 1-2.74 2.74z"
						clipRule="evenodd"
					/>
					<path d="m13.267 4.611-.782.783A8.002 8.002 0 0 0 2.687 9.75a.62.62 0 0 0 0 .499A8 8 0 0 0 4.8 13.08l-.709.708a9 9 0 0 1-2.316-3.132 1.61 1.61 0 0 1 0-1.313A9 9 0 0 1 10 4c1.152 0 2.254.217 3.267.611" />
					<path d="m10.777 7.102-.902.902a2 2 0 0 0-1.871 1.87l-.902.903a3 3 0 0 1 3.675-3.675" />
				</svg>
			);
	}
};

IconViewOff.iconName = "view-off";

export default IconViewOff;
