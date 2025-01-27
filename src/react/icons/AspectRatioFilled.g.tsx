import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAspectRatioFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 4a2 2 0 0 0-2 2v1h11a2 2 0 0 1 2 2v7h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
					<path d="M14 16V9a1 1 0 0 0-1-1h-2v8zM10 16V8H2v6a2 2 0 0 0 2 2z" />
				</svg>
			);
	}
};

IconAspectRatioFilled.iconName = "aspect-ratio--filled";

export default IconAspectRatioFilled;
