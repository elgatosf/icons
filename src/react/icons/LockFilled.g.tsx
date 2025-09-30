import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLockFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V9H6C4.89543 9 4 9.89543 4 11V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V11C20 9.89543 19.1046 9 18 9H16.75V6C16.75 3.37665 14.6234 1.25 12 1.25ZM15.25 9V6C15.25 4.20507 13.7949 2.75 12 2.75C10.2051 2.75 8.75 4.20507 8.75 6V9H15.25ZM13.5 14.5C13.5 15.0552 13.1984 15.54 12.75 15.7993V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V15.7993C10.8016 15.54 10.5 15.0552 10.5 14.5C10.5 13.6716 11.1716 13 12 13C12.8284 13 13.5 13.6716 13.5 14.5Z"
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
						d="M6 8V6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6V8C15.1046 8 16 8.89543 16 10V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V10C4 8.89543 4.89543 8 6 8ZM7 6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6V8H7V6ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13Z"
					/>
				</svg>
			);
	}
};

IconLockFilled.iconName = "lock--filled";

export default IconLockFilled;
