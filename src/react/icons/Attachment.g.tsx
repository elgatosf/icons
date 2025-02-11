import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAttachment = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V7.75a.75.75 0 0 1 1.5 0V15a5.5 5.5 0 1 0 11 0V7a3.5 3.5 0 1 0-7 0v8a1.5 1.5 0 0 0 3 0V7.75a.75.75 0 0 1 1.5 0V15a3 3 0 1 1-6 0z"
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
						d="M8 5.5a3.5 3.5 0 1 1 7 0V13a5 5 0 0 1-10 0V6.5a.5.5 0 0 1 1 0V13a4 4 0 0 0 8 0V5.5a2.5 2.5 0 0 0-5 0V13a1 1 0 1 0 2 0V6.5a.5.5 0 0 1 1 0V13a2 2 0 1 1-4 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAttachment.iconName = "attachment";

export default IconAttachment;
