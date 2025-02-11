import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMessage = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8 10.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M8.75 13a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" />
					<path
						fillRule="evenodd"
						d="M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-4.588-1.112l-4.224 1.151a1 1 0 0 1-1.228-1.227l1.152-4.224A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10M4.713 16.419l-1.075 3.943 3.943-1.075.52.268A8.46 8.46 0 0 0 12 20.5 8.5 8.5 0 1 0 3.5 12c0 1.409.341 2.733.945 3.899z"
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
					<path d="M5 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
					<path
						fillRule="evenodd"
						d="M1.872 11.385.816 14.551a.5.5 0 0 0 .633.633l3.166-1.056a7 7 0 1 0-2.743-2.743m1.087-.1-.878 2.634 2.634-.878.384.213A6 6 0 1 0 2.746 10.9z"
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
					<path d="M7.5 8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM7 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 1 0-7.073-4.258l-1.16 3.869a.5.5 0 0 0 .622.622l3.869-1.16A7.96 7.96 0 0 0 10 18m-7.009-.991 1.012-3.373-.192-.362a7 7 0 1 1 2.915 2.915l-.362-.192z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconMessage.iconName = "message";

export default IconMessage;
