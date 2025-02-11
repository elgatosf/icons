import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBrightnessIncreaseFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12.75 2.75a.75.75 0 0 0-1.5 0V5a.75.75 0 0 0 1.5 0zM19.071 5.99a.75.75 0 0 0-1.06-1.061l-1.592 1.59a.75.75 0 1 0 1.061 1.062zM21.25 12.75a.75.75 0 0 0 0-1.5H19a.75.75 0 0 0 0 1.5zM18.01 19.071a.75.75 0 0 0 1.061-1.06l-1.59-1.591a.75.75 0 1 0-1.062 1.06zM11.25 21.25a.75.75 0 0 0 1.5 0V19a.75.75 0 0 0-1.5 0zM4.929 18.01a.75.75 0 0 0 1.06 1.061l1.592-1.59a.75.75 0 1 0-1.061-1.062zM2.75 11.25a.75.75 0 0 0 0 1.5H5a.75.75 0 0 0 0-1.5zM5.99 4.929a.75.75 0 0 0-1.061 1.06l1.59 1.592A.75.75 0 0 0 7.582 6.52z" />
					<path
						fillRule="evenodd"
						d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-8 0a.75.75 0 0 1 .75-.75h1.5v-1.5a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5A.75.75 0 0 1 9 12"
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
					<path d="M10 2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 10 2" />
					<path
						fillRule="evenodd"
						d="M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-5.5-.5a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-1 0v1z"
						clipRule="evenodd"
					/>
					<path d="M15.657 5.05a.5.5 0 1 0-.707-.707l-1.414 1.414a.5.5 0 1 0 .707.707zM18 10a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M14.95 15.657a.5.5 0 0 0 .707-.707l-1.414-1.414a.5.5 0 0 0-.707.707zM10 18a.5.5 0 0 1-.5-.5v-2a.5.5 0 1 1 1 0v2a.5.5 0 0 1-.5.5M4.343 14.95a.5.5 0 1 0 .707.707l1.414-1.414a.5.5 0 0 0-.707-.707zM2 10a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-2A.5.5 0 0 1 2 10M5.05 4.343a.5.5 0 1 0-.707.707l1.414 1.415a.5.5 0 1 0 .707-.707z" />
				</svg>
			);
	}
};

IconBrightnessIncreaseFilled.iconName = "brightness-increase--filled";

export default IconBrightnessIncreaseFilled;
