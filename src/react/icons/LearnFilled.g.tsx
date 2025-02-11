import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLearnFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="m10.926 15.967-8.6-5.473a1 1 0 0 1 0-1.688l8.6-5.473a2 2 0 0 1 2.148 0l8.6 5.473a1 1 0 0 1 0 1.688l-.674.429v5.327a.75.75 0 0 1-1.5 0v-4.373l-6.426 4.09a2 2 0 0 1-2.148 0" />
					<path d="m6 14.61 4.12 2.622a3.5 3.5 0 0 0 3.759 0L18 14.61v2.032a2 2 0 0 1-.971 1.715l-4 2.4a2 2 0 0 1-2.058 0l-4-2.4A2 2 0 0 1 6 16.642z" />
				</svg>
			);
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
