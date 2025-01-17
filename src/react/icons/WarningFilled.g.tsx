import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWarningFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M8.866 1.5a1 1 0 0 0-1.732 0l-6.35 11a1 1 0 0 0 .865 1.5h12.702a1 1 0 0 0 .866-1.5zm-.366 4a.5.5 0 0 0-1 0V9a.5.5 0 0 0 1 0zm.25 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
						clipRule="evenodd"
					/>
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
					<path
						fillRule="evenodd"
						d="M8.268 3.5c.77-1.333 2.694-1.333 3.464 0L17.794 14c.77 1.333-.192 3-1.732 3H3.938c-1.54 0-2.502-1.667-1.732-3zM10 6a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V6.5A.5.5 0 0 1 10 6m0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconWarningFilled.iconName = "warning--filled";

export default IconWarningFilled;
