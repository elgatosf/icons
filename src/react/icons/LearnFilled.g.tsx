import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLearnFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.25 3.201a1.5 1.5 0 0 1 1.5 0l6.5 3.753c1 .577 1 2.02 0 2.598l-.25.144V14.5a.5.5 0 1 1-1 0v-4.226l-5.25 3.03a1.5 1.5 0 0 1-1.5 0l-6.5-3.752a1.5 1.5 0 0 1 0-2.598z" />
					<path d="M15 12.006v1.473a1.5 1.5 0 0 1-.75 1.3l-3.5 2.02a1.5 1.5 0 0 1-1.5 0l-3.5-2.02a1.5 1.5 0 0 1-.75-1.3v-1.473l3.75 2.165a2.5 2.5 0 0 0 2.5 0z" />
				</svg>
			);
	}
};

IconLearnFilled.iconName = "learn--filled";

export default IconLearnFilled;
