import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconItalic = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M15.5 3h-7a.5.5 0 0 0 0 1h2.823L7.631 16H4.5a.5.5 0 0 0 0 1h7a.5.5 0 1 0 0-1H8.677l3.692-12H15.5a.5.5 0 0 0 0-1" />
				</svg>
			);
	}
};

IconItalic.iconName = "italic";

export default IconItalic;
