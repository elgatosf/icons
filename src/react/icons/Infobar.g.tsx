import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconInfobar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8.25 11C8.66421 11 9 11.3358 9 11.75C9 12.1642 8.66421 12.5 8.25 12.5H5.75C5.33579 12.5 5 12.1642 5 11.75C5 11.3358 5.33579 11 5.75 11H8.25Z" />
					<path d="M18.25 11C18.6642 11 19 11.3358 19 11.75C19 12.1642 18.6642 12.5 18.25 12.5H15.75C15.3358 12.5 15 12.1642 15 11.75C15 11.3358 15.3358 11 15.75 11H18.25Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M20 7C21.1046 7 22 7.89543 22 9V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V9C2 7.89543 2.89543 7 4 7H20ZM4 8.5C3.72386 8.5 3.5 8.72386 3.5 9V15C3.5 15.2761 3.72386 15.5 4 15.5H20C20.2761 15.5 20.5 15.2761 20.5 15V9C20.5 8.72386 20.2761 8.5 20 8.5H4Z"
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
					<path d="M6 7.5C6.27614 7.5 6.5 7.72386 6.5 8C6.5 8.27614 6.27614 8.5 6 8.5H4C3.72386 8.5 3.5 8.27614 3.5 8C3.5 7.72386 3.72386 7.5 4 7.5H6Z" />
					<path d="M12 7.5C12.2761 7.5 12.5 7.72386 12.5 8C12.5 8.27614 12.2761 8.5 12 8.5H10C9.72386 8.5 9.5 8.27614 9.5 8C9.5 7.72386 9.72386 7.5 10 7.5H12Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13.2041 5.01074C14.2128 5.113 15 5.96435 15 7V9L14.9893 9.2041C14.8938 10.1457 14.1457 10.8938 13.2041 10.9893L13 11H3L2.7959 10.9893C1.85435 10.8938 1.1062 10.1457 1.01074 9.2041L1 9V7C1 5.96435 1.78722 5.113 2.7959 5.01074L3 5H13L13.2041 5.01074ZM3 6C2.44772 6 2 6.44772 2 7V9C2 9.55228 2.44772 10 3 10H13C13.5523 10 14 9.55228 14 9V7C14 6.44772 13.5523 6 13 6H3Z"
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
					<path d="M8 9.5C8.27614 9.5 8.5 9.72386 8.5 10C8.5 10.2761 8.27614 10.5 8 10.5H6C5.72386 10.5 5.5 10.2761 5.5 10C5.5 9.72386 5.72386 9.5 6 9.5H8Z" />
					<path d="M14 9.5C14.2761 9.5 14.5 9.72386 14.5 10C14.5 10.2761 14.2761 10.5 14 10.5H12C11.7239 10.5 11.5 10.2761 11.5 10C11.5 9.72386 11.7239 9.5 12 9.5H14Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16 6C17.1046 6 18 6.89543 18 8V12L17.9893 12.2041C17.887 13.2128 17.0357 14 16 14H4L3.7959 13.9893C2.78722 13.887 2 13.0357 2 12V8C2 6.96435 2.78722 6.113 3.7959 6.01074L4 6H16ZM4 7C3.44772 7 3 7.44772 3 8V12C3 12.5523 3.44772 13 4 13H16C16.5523 13 17 12.5523 17 12V8C17 7.44772 16.5523 7 16 7H4Z"
					/>
				</svg>
			);
	}
};

IconInfobar.iconName = "infobar";

export default IconInfobar;
