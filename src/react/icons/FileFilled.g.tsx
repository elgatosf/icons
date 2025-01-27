import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFileFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h-4a2 2 0 0 1-2-2z" />
					<path d="M15.973 7a2 2 0 0 0-.559-1.086l-3.328-3.328A2 2 0 0 0 11 2.027V6a1 1 0 0 0 1 1z" />
				</svg>
			);
	}
};

IconFileFilled.iconName = "file--filled";

export default IconFileFilled;
