import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMessageFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.654.401 3.214 1.112 4.588L1.96 20.812a1 1 0 0 0 1.228 1.227l4.224-1.151A9.96 9.96 0 0 0 12 22M8 10.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M8.75 13a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
						clipRule="evenodd"
					/>
				</svg>
			);
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
						d="M8 15a7 7 0 1 0-6.128-3.615L.816 14.551a.5.5 0 0 0 .633.633l3.166-1.056A6.97 6.97 0 0 0 8 15M5 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"
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
						d="M18 10a8 8 0 0 1-11.742 7.073l-3.869 1.16a.5.5 0 0 1-.622-.622l1.16-3.869A8 8 0 1 1 18 10M7.5 8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM7 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconMessageFilled.iconName = "message--filled";

export default IconMessageFilled;
