import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPaymentFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V7.5H2V6Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2 9H22V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V9ZM5.75 15.5C5.33579 15.5 5 15.8358 5 16.25C5 16.6642 5.33579 17 5.75 17L11.25 17C11.6642 17 12 16.6642 12 16.25C12 15.8358 11.6642 15.5 11.25 15.5L5.75 15.5Z"
					/>
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M2 6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V7H2V6Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2 8H18V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V8ZM5.5 12C5.22386 12 5 12.2239 5 12.5C5 12.7761 5.22386 13 5.5 13H9.5C9.77614 13 10 12.7761 10 12.5C10 12.2239 9.77614 12 9.5 12H5.5Z"
					/>
				</svg>
			);
	}
};

IconPaymentFilled.iconName = "payment--filled";

export default IconPaymentFilled;
