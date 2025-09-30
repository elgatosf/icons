import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckKeyMiddle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.75 11.25C7.33579 11.25 7 11.5858 7 12C7 12.4142 7.33579 12.75 7.75 12.75H16.25C16.6642 12.75 17 12.4142 17 12C17 11.5858 16.6642 11.25 16.25 11.25H7.75Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7ZM7 4.5H17C18.3807 4.5 19.5 5.61929 19.5 7V17C19.5 18.3807 18.3807 19.5 17 19.5H7C5.61929 19.5 4.5 18.3807 4.5 17V7C4.5 5.61929 5.61929 4.5 7 4.5Z"
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
					<path d="M10.5 7.5C10.7761 7.5 11 7.72386 11 8C11 8.27614 10.7761 8.5 10.5 8.5H5.5C5.22386 8.5 5 8.27614 5 8C5 7.72386 5.22386 7.5 5.5 7.5H10.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5Z"
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
					<path d="M6.5 9.5C6.22386 9.5 6 9.72386 6 10C6 10.2761 6.22386 10.5 6.5 10.5H13.5C13.7761 10.5 14 10.2761 14 10C14 9.72386 13.7761 9.5 13.5 9.5H6.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM6 4H14C15.1046 4 16 4.89543 16 6V14C16 15.1046 15.1046 16 14 16H6C4.89543 16 4 15.1046 4 14V6C4 4.89543 4.89543 4 6 4Z"
					/>
				</svg>
			);
	}
};

IconStreamDeckKeyMiddle.iconName = "stream-deck-key-middle";

export default IconStreamDeckKeyMiddle;
