import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAdjustHorizontal = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M15.25 4C13.4358 4 11.9225 5.28832 11.575 7L2.75 7C2.33579 7 2 7.33579 2 7.75C2 8.16421 2.33579 8.5 2.75 8.5L11.575 8.5C11.9225 10.2117 13.4358 11.5 15.25 11.5C17.0642 11.5 18.5775 10.2117 18.925 8.5L21.25 8.5C21.6642 8.5 22 8.16421 22 7.75C22 7.33579 21.6642 7 21.25 7L18.925 7C18.5775 5.28832 17.0642 4 15.25 4ZM15.25 5.5C16.4926 5.5 17.5 6.50736 17.5 7.75C17.5 8.99264 16.4926 10 15.25 10C14.0074 10 13 8.99264 13 7.75C13 6.50736 14.0074 5.5 15.25 5.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.75 12.5C10.5642 12.5 12.0775 13.7883 12.425 15.5L21.25 15.5C21.6642 15.5 22 15.8358 22 16.25C22 16.6642 21.6642 17 21.25 17L12.425 17C12.0775 18.7117 10.5642 20 8.75 20C6.93578 20 5.42247 18.7117 5.07501 17L2.75 17C2.33578 17 2 16.6642 2 16.25C2 15.8358 2.33578 15.5 2.75 15.5L5.07501 15.5C5.42247 13.7883 6.93578 12.5 8.75 12.5ZM8.75 14C7.50736 14 6.5 15.0074 6.5 16.25C6.5 17.4926 7.50736 18.5 8.75 18.5C9.99264 18.5 11 17.4926 11 16.25C11 15.0074 9.99264 14 8.75 14Z"
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
						d="M14.95 6H17.5C17.7761 6 18 6.22386 18 6.5C18 6.77614 17.7761 7 17.5 7H14.95C14.7184 8.14112 13.7095 9 12.5 9C11.2905 9 10.2816 8.14112 10.05 7H2.5C2.22386 7 2 6.77614 2 6.5C2 6.22386 2.22386 6 2.5 6H10.05C10.2816 4.85888 11.2905 4 12.5 4C13.7095 4 14.7184 4.85888 14.95 6ZM12.5 8C13.3284 8 14 7.32843 14 6.5C14 5.67157 13.3284 5 12.5 5C11.6716 5 11 5.67157 11 6.5C11 7.32843 11.6716 8 12.5 8Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.94999 13C9.71836 11.8589 8.70948 11 7.5 11C6.29052 11 5.28164 11.8589 5.05001 13H2.5C2.22386 13 2 13.2239 2 13.5C2 13.7761 2.22386 14 2.5 14H5.05001C5.28164 15.1411 6.29052 16 7.5 16C8.70948 16 9.71836 15.1411 9.94999 14H17.5C17.7761 14 18 13.7761 18 13.5C18 13.2239 17.7761 13 17.5 13H9.94999ZM7.5 15C8.32843 15 9 14.3284 9 13.5C9 12.6716 8.32843 12 7.5 12C6.67157 12 6 12.6716 6 13.5C6 14.3284 6.67157 15 7.5 15Z"
					/>
				</svg>
			);
	}
};

IconAdjustHorizontal.iconName = "adjust-horizontal";

export default IconAdjustHorizontal;
