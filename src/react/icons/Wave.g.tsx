import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWave = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM18 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zM8.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M3 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zM14.5 6a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M6 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z" />
				</svg>
			);
	}
};

IconWave.iconName = "wave";

export default IconWave;
