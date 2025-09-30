import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPayment = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5 16.25C5 15.8358 5.33579 15.5 5.75 15.5L11.25 15.5C11.6642 15.5 12 15.8358 12 16.25C12 16.6642 11.6642 17 11.25 17L5.75 17C5.33579 17 5 16.6642 5 16.25Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM4 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V7.5H3.5V6C3.5 5.72386 3.72386 5.5 4 5.5ZM3.5 9V18C3.5 18.2761 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V9H3.5Z"
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
					<path d="M5.5 12C5.22386 12 5 12.2239 5 12.5C5 12.7761 5.22386 13 5.5 13H9.5C9.77614 13 10 12.7761 10 12.5C10 12.2239 9.77614 12 9.5 12H5.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M4 4C2.89543 4 2 4.89543 2 6V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H4ZM16 5H4C3.44772 5 3 5.44772 3 6V7H17V6C17 5.44772 16.5523 5 16 5ZM3 14V8H17V14C17 14.5523 16.5523 15 16 15H4C3.44772 15 3 14.5523 3 14Z"
					/>
				</svg>
			);
	}
};

IconPayment.iconName = "payment";

export default IconPayment;
