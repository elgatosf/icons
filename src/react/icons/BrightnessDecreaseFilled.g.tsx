import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBrightnessDecreaseFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10 2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 10 2" />
					<path
						fillRule="evenodd"
						d="M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-5.5-.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"
						clipRule="evenodd"
					/>
					<path d="M15.657 4.343a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M18 10a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M15.657 15.657a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M10 18a.5.5 0 0 1-.5-.5v-2a.5.5 0 1 1 1 0v2a.5.5 0 0 1-.5.5M4.343 15.657a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 0 1 .707.707L5.05 15.657a.5.5 0 0 1-.707 0M2 10a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-2A.5.5 0 0 1 2 10M4.343 4.343a.5.5 0 0 1 .707 0l1.414 1.415a.5.5 0 0 1-.707.707L4.343 5.05a.5.5 0 0 1 0-.707" />
				</svg>
			);
	}
};

IconBrightnessDecreaseFilled.iconName = "brightness-decrease--filled";

export default IconBrightnessDecreaseFilled;
