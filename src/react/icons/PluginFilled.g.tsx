import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPluginFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10 2a2 2 0 0 0-2 2 1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1a1 1 0 0 1-1-1 2 2 0 0 0-2-2" />
				</svg>
			);
	}
};

IconPluginFilled.iconName = "plugin--filled";

export default IconPluginFilled;
