import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconThumbUpFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8 20H15.9448C17.7486 20 19.3293 18.7927 19.8039 17.0525L21.311 11.5262C21.658 10.254 20.7002 9 19.3815 9H14V5.30522C14 4.03208 12.9679 3 11.6948 3C10.6865 3 9.79523 3.65526 9.49449 4.61763L8 9.4V20Z" />
					<path d="M6.5 20V11H5C3.89543 11 3 11.8954 3 13V18C3 19.1046 3.89543 20 5 20H6.5Z" />
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
					<path d="M6 16H5C3.89544 16 3.00002 15.1045 3 14V11C3 9.89542 3.89543 8.99998 5 8.99998H6V16Z" />
					<path d="M9.11523 3.92284C9.74592 2.40949 12 2.86042 12 4.49998V6.99998H15.3936C16.7086 6.99999 17.6656 8.24732 17.3252 9.51756L16.3828 13.0351C15.9143 14.7838 14.3298 15.9998 12.5195 16H7V8.99998L9.11523 3.92284Z" />
				</svg>
			);
	}
};

IconThumbUpFilled.iconName = "thumb-up--filled";

export default IconThumbUpFilled;
