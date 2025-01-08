import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCubeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10.75 2.35a1.5 1.5 0 0 0-1.5 0l-5.5 3.176a1.5 1.5 0 0 0-.225.159L10 9.423l6.475-3.739a1.5 1.5 0 0 0-.225-.158zM16.975 6.55 10.5 10.29v7.476q.13-.046.25-.115l5.5-3.175a1.5 1.5 0 0 0 .75-1.3v-6.35q0-.14-.025-.275M9.5 17.765V10.29L3.025 6.55A1.5 1.5 0 0 0 3 6.825v6.35a1.5 1.5 0 0 0 .75 1.3l5.5 3.175q.12.07.25.115" />
				</svg>
			);
	}
};

IconCubeFilled.iconName = "cube--filled";

export default IconCubeFilled;
