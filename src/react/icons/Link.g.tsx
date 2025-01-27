import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2 10a5 5 0 0 1 5-5h.5a.5.5 0 0 1 0 1H7a4 4 0 1 0 0 8h.5a.5.5 0 0 1 0 1H7a5 5 0 0 1-5-5M18 10a5 5 0 0 0-5-5h-.5a.5.5 0 0 0 0 1h.5a4 4 0 0 1 0 8h-.5a.5.5 0 0 0 0 1h.5a5 5 0 0 0 5-5" />
					<path d="M7.5 9.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
				</svg>
			);
	}
};

IconLink.iconName = "link";

export default IconLink;
