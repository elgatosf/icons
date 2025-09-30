import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckKeyTopFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M7 21C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7ZM7.75 8.5C7.33579 8.5 7 8.16421 7 7.75C7 7.33579 7.33579 7 7.75 7H16.25C16.6642 7 17 7.33579 17 7.75C17 8.16421 16.6642 8.5 16.25 8.5H7.75Z"
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
						d="M11 14C12.6569 14 14 12.6569 14 11V5C14 3.34315 12.6569 2 11 2H5C3.34315 2 2 3.34315 2 5V11C2 12.6569 3.34315 14 5 14H11ZM5.5 6C5.22386 6 5 5.77614 5 5.5C5 5.22386 5.22386 5 5.5 5H10.5C10.7761 5 11 5.22386 11 5.5C11 5.77614 10.7761 6 10.5 6H5.5Z"
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
						d="M6 17C4.34315 17 3 15.6569 3 14V6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6ZM6.5 7C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H13.5C13.7761 6 14 6.22386 14 6.5C14 6.77614 13.7761 7 13.5 7H6.5Z"
					/>
				</svg>
			);
	}
};

IconStreamDeckKeyTopFilled.iconName = "stream-deck-key-top--filled";

export default IconStreamDeckKeyTopFilled;
