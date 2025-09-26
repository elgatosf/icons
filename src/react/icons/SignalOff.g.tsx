import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSignalOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m2.483 3.028a.5.5 0 0 0-.707 0L17.505 16.8l-1.772-1.772a.5.5 0 0 0-.707.707l1.772 1.772-1.765 1.764a.5.5 0 0 0 .708.707l1.764-1.764 1.765 1.765a.5.5 0 0 0 .707-.707l-1.765-1.765 1.771-1.772a.5.5 0 0 0 0-.707"
						clipRule="evenodd"
					/>
					<path d="M3.75 16a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75M9.25 11.667a.75.75 0 0 1 .75.75v7.833a.75.75 0 0 1-1.5 0v-7.833a.75.75 0 0 1 .75-.75M14.75 7.333a.75.75 0 0 1 .75.75v3.232a6.5 6.5 0 0 0-1.5.71V8.082a.75.75 0 0 1 .75-.75M20.25 3a.75.75 0 0 1 .75.75v8.274a6.5 6.5 0 0 0-1.5-.71V3.75a.75.75 0 0 1 .75-.75" />
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
						d="M14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m2.13 2.382a.5.5 0 0 0-.707 0L14.505 13.8l-1.418-1.418a.5.5 0 0 0-.707.707l1.418 1.418-1.41 1.411a.5.5 0 1 0 .707.707l1.41-1.411 1.411 1.411a.5.5 0 0 0 .707-.707l-1.411-1.411 1.418-1.418a.5.5 0 0 0 0-.707"
						clipRule="evenodd"
					/>
					<path d="M3.5 13a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M7.833 9.667a.5.5 0 0 1 .5.5V16.5a.5.5 0 0 1-1 0v-6.333a.5.5 0 0 1 .5-.5M12.167 6.333a.5.5 0 0 1 .5.5v2.48a5.5 5.5 0 0 0-1 .472V6.833a.5.5 0 0 1 .5-.5M16.5 3a.5.5 0 0 1 .5.5v6.1a5.5 5.5 0 0 0-1-.392V3.5a.5.5 0 0 1 .5-.5" />
				</svg>
			);
	}
};

IconSignalOff.iconName = "signal-off";

export default IconSignalOff;
