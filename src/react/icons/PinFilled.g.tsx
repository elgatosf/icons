import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPinFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M11.22 2.22a.75.75 0 0 1 1.06 0l9.5 9.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22-6.94 6.94 1.22 1.22a.75.75 0 1 1-1.06 1.06L8.5 16.56l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22-4.22-4.22a.75.75 0 1 1 1.06-1.06l1.22 1.22 6.94-6.94-1.22-1.22a.75.75 0 0 1 0-1.06"
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
					<path d="M10 4.121c0-1.781 2.154-2.674 3.414-1.414l3.879 3.879c1.26 1.26.368 3.414-1.414 3.414H14.62a1 1 0 0 0-.707.293l-.621.621a1 1 0 0 0-.293.707v2.758c0 1.782-2.154 2.674-3.414 1.414L7.25 13.457l-3.396 3.397a.5.5 0 0 1-.708-.708l3.397-3.396-2.336-2.336C2.947 9.154 3.84 7 5.621 7H8.38a1 1 0 0 0 .707-.293l.621-.621A1 1 0 0 0 10 5.379z" />
				</svg>
			);
	}
};

IconPinFilled.iconName = "pin--filled";

export default IconPinFilled;
