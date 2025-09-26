import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTransitionFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 5a2 2 0 0 1 2-2h2.5v18H5a2 2 0 0 1-2-2zM11 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" />
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
					<path d="M7 3a2 2 0 0 1 2 2v3a.5.5 0 0 1-.5.5h-2a1.5 1.5 0 1 0 0 3h2a.5.5 0 0 1 .5.5v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM15 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V5a2 2 0 0 1 2-2z" />
					<path d="M11.147 7.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 1 1-.707-.707l1.646-1.646H6.5a.5.5 0 0 1 0-1h6.293l-1.646-1.646-.065-.079a.5.5 0 0 1 .064-.629" />
				</svg>
			);
	}
};

IconTransitionFilled.iconName = "transition--filled";

export default IconTransitionFilled;
