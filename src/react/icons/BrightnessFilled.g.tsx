import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBrightnessFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 2a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 12 2M19.071 4.929a.75.75 0 0 1 0 1.06l-1.59 1.592a.75.75 0 0 1-1.062-1.061l1.591-1.591a.75.75 0 0 1 1.061 0M21.25 12.75a.75.75 0 0 0 0-1.5H19a.75.75 0 0 0 0 1.5zM19.071 19.071a.75.75 0 0 1-1.06 0l-1.591-1.59a.75.75 0 1 1 1.06-1.062l1.591 1.591a.75.75 0 0 1 0 1.061M11.25 21.25a.75.75 0 0 0 1.5 0V19a.75.75 0 0 0-1.5 0zM4.929 19.071a.75.75 0 0 1 0-1.06l1.59-1.591a.75.75 0 0 1 1.062 1.06L5.99 19.071a.75.75 0 0 1-1.061 0M2.75 11.25a.75.75 0 0 0 0 1.5H5a.75.75 0 0 0 0-1.5zM4.929 4.929a.75.75 0 0 1 1.06 0l1.592 1.59A.75.75 0 0 1 6.52 7.582L4.929 5.99a.75.75 0 0 1 0-1.061M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
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
					<path d="M10 2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 10 2M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0M15.657 5.05a.5.5 0 1 0-.707-.707l-1.414 1.414a.5.5 0 1 0 .707.707zM18 10a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M14.95 15.657a.5.5 0 0 0 .707-.707l-1.414-1.414a.5.5 0 0 0-.707.707zM10 18a.5.5 0 0 1-.5-.5v-2a.5.5 0 1 1 1 0v2a.5.5 0 0 1-.5.5M4.343 14.95a.5.5 0 1 0 .707.707l1.414-1.414a.5.5 0 0 0-.707-.707zM2 10a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-2A.5.5 0 0 1 2 10M5.05 4.343a.5.5 0 1 0-.707.707l1.414 1.415a.5.5 0 1 0 .707-.707z" />
				</svg>
			);
	}
};

IconBrightnessFilled.iconName = "brightness--filled";

export default IconBrightnessFilled;
