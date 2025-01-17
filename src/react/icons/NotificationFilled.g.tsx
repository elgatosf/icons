import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNotificationFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10 3a5 5 0 0 0-5 5v2.586a1 1 0 0 1-.293.707L3.44 12.56A1.5 1.5 0 0 0 3 13.62v.879A1.5 1.5 0 0 0 4.5 16h2.672a3 3 0 0 0 5.656 0H15.5a1.5 1.5 0 0 0 1.5-1.5v-.879a1.5 1.5 0 0 0-.44-1.06l-1.267-1.268a1 1 0 0 1-.293-.707V8a5 5 0 0 0-5-5m1.732 13H8.268a2 2 0 0 0 3.464 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconNotificationFilled.iconName = "notification--filled";

export default IconNotificationFilled;
