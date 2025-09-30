import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconInfobarFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M20 7C21.1046 7 22 7.89543 22 9V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V9C2 7.89543 2.89543 7 4 7H20ZM5.75 11C5.33579 11 5 11.3358 5 11.75C5 12.1642 5.33579 12.5 5.75 12.5H8.25C8.66421 12.5 9 12.1642 9 11.75C9 11.3358 8.66421 11 8.25 11H5.75ZM15.75 11C15.3358 11 15 11.3358 15 11.75C15 12.1642 15.3358 12.5 15.75 12.5H18.25C18.6642 12.5 19 12.1642 19 11.75C19 11.3358 18.6642 11 18.25 11H15.75Z"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					viewBox="0 0 16 16"
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
						d="M13 5C14.1046 5 15 5.89543 15 7V9C15 10.1046 14.1046 11 13 11H3C1.89543 11 1 10.1046 1 9V7C1 5.89543 1.89543 5 3 5H13ZM4 7.5C3.72386 7.5 3.5 7.72386 3.5 8C3.5 8.27614 3.72386 8.5 4 8.5H6C6.27614 8.5 6.5 8.27614 6.5 8C6.5 7.72386 6.27614 7.5 6 7.5H4ZM10 7.5C9.72386 7.5 9.5 7.72386 9.5 8C9.5 8.27614 9.72386 8.5 10 8.5H12C12.2761 8.5 12.5 8.27614 12.5 8C12.5 7.72386 12.2761 7.5 12 7.5H10Z"
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
						d="M16 6C17.1046 6 18 6.89543 18 8V12C18 13.1046 17.1046 14 16 14H4C2.89543 14 2 13.1046 2 12V8C2 6.89543 2.89543 6 4 6H16ZM6 9.5C5.72386 9.5 5.5 9.72386 5.5 10C5.5 10.2761 5.72386 10.5 6 10.5H8C8.27614 10.5 8.5 10.2761 8.5 10C8.5 9.72386 8.27614 9.5 8 9.5H6ZM12 9.5C11.7239 9.5 11.5 9.72386 11.5 10C11.5 10.2761 11.7239 10.5 12 10.5H14C14.2761 10.5 14.5 10.2761 14.5 10C14.5 9.72386 14.2761 9.5 14 9.5H12Z"
					/>
				</svg>
			);
	}
};

IconInfobarFilled.iconName = "infobar--filled";

export default IconInfobarFilled;
