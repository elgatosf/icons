import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVolumeMutedFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9 3.5a.5.5 0 0 0-.854-.354L4.293 7H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1.293l3.853 3.854A.5.5 0 0 0 9 16.5zM12.146 7.146a.5.5 0 0 1 .708 0L15 9.293l2.146-2.147a.5.5 0 0 1 .708.708L15.707 10l2.147 2.146a.5.5 0 0 1-.708.708L15 10.707l-2.146 2.147a.5.5 0 0 1-.708-.708L14.293 10l-2.147-2.146a.5.5 0 0 1 0-.708" />
				</svg>
			);
	}
};

IconVolumeMutedFilled.iconName = "volume-muted--filled";

export default IconVolumeMutedFilled;
