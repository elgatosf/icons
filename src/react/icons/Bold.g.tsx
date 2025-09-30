import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBold = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6 5C6 3.89543 6.89543 3 8 3H13C15.7614 3 18 5.23858 18 8C18 9.30809 17.4977 10.4989 16.6754 11.3899C18.0775 12.3325 19 13.9335 19 15.75C19 18.6495 16.6495 21 13.75 21H8C6.89543 21 6 20.1046 6 19V5ZM15.5 8C15.5 9.38071 14.3807 10.5 13 10.5H8.5V5.5H13C14.3807 5.5 15.5 6.61929 15.5 8ZM8.5 13V18.5H13.75C15.2688 18.5 16.5 17.2688 16.5 15.75C16.5 14.2312 15.2688 13 13.75 13H8.5Z"
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5 3.75C5 3.33579 5.33579 3 5.75 3H10.25C12.3211 3 14 4.67893 14 6.75C14 7.81165 13.5588 8.77026 12.8498 9.4525C14.1278 10.1202 15 11.4583 15 13C15 15.2091 13.2091 17 11 17H5.75C5.33579 17 5 16.6642 5 16.25V3.75ZM10.25 9C11.4926 9 12.5 7.99264 12.5 6.75C12.5 5.50736 11.4926 4.5 10.25 4.5H6.5V9H10.25ZM6.5 10.5V15.5H11C12.3807 15.5 13.5 14.3807 13.5 13C13.5 11.6193 12.3807 10.5 11 10.5H6.5Z"
					/>
				</svg>
			);
	}
};

IconBold.iconName = "bold";

export default IconBold;
