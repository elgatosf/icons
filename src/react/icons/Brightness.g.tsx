import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBrightness = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
						clipRule="evenodd"
					/>
					<path d="M15.657 5.05a.5.5 0 1 0-.707-.707l-1.414 1.414a.5.5 0 1 0 .707.707zM18 10a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M14.95 15.657a.5.5 0 0 0 .707-.707l-1.414-1.414a.5.5 0 0 0-.707.707zM10 18a.5.5 0 0 1-.5-.5v-2a.5.5 0 1 1 1 0v2a.5.5 0 0 1-.5.5M4.343 14.95a.5.5 0 1 0 .707.707l1.414-1.414a.5.5 0 0 0-.707-.707zM2 10a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-2A.5.5 0 0 1 2 10M5.05 4.343a.5.5 0 1 0-.707.707l1.414 1.415a.5.5 0 1 0 .707-.707z" />
				</svg>
			);
	}
};

IconBrightness.iconName = "brightness";

export default IconBrightness;
