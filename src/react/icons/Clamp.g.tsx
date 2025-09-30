import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconClamp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5 4C5 2.89543 5.89543 2 7 2H18.25C18.6642 2 19 2.33579 19 2.75C19 3.16421 18.6642 3.5 18.25 3.5H7C6.72386 3.5 6.5 3.72386 6.5 4V16C6.5 16.2761 6.72386 16.5 7 16.5H13V13.5H9.25C8.83579 13.5 8.5 13.1642 8.5 12.75C8.5 12.3358 8.83579 12 9.25 12H18.25C18.6642 12 19 12.3358 19 12.75C19 13.1642 18.6642 13.5 18.25 13.5H14.5V16.5H18.25C18.6642 16.5 19 16.8358 19 17.25C19 17.6642 18.6642 18 18.25 18H14.5V20.5H16.75C17.1642 20.5 17.5 20.8358 17.5 21.25C17.5 21.6642 17.1642 22 16.75 22H10.75C10.3358 22 10 21.6642 10 21.25C10 20.8358 10.3358 20.5 10.75 20.5H13V18H7C5.89543 18 5 17.1046 5 16V4Z" />
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
					<path d="M3 3C3 1.89543 3.89543 1 5 1H12.5C12.7761 1 13 1.22386 13 1.5C13 1.77614 12.7761 2 12.5 2H5C4.44772 2 4 2.44772 4 3V10C4 10.5523 4.44772 11 5 11H9V9H6.5C6.22386 9 6 8.77614 6 8.5C6 8.22386 6.22386 8 6.5 8H12.5C12.7761 8 13 8.22386 13 8.5C13 8.77614 12.7761 9 12.5 9H10V11H12.5C12.7761 11 13 11.2239 13 11.5C13 11.7761 12.7761 12 12.5 12H10V14H11C11.2761 14 11.5 14.2239 11.5 14.5C11.5 14.7761 11.2761 15 11 15H8C7.72386 15 7.5 14.7761 7.5 14.5C7.5 14.2239 7.72386 14 8 14H9V12H5C3.89543 12 3 11.1046 3 10V3Z" />
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
					<path d="M4 4C4 2.89543 4.89543 2 6 2H15.5C15.7761 2 16 2.22386 16 2.5C16 2.77614 15.7761 3 15.5 3H6C5.44772 3 5 3.44772 5 4V13C5 13.5523 5.44772 14 6 14H11V11H7.5C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10H15.5C15.7761 10 16 10.2239 16 10.5C16 10.7761 15.7761 11 15.5 11H12V14H15.5C15.7761 14 16 14.2239 16 14.5C16 14.7761 15.7761 15 15.5 15H12V17H13.5C13.7761 17 14 17.2239 14 17.5C14 17.7761 13.7761 18 13.5 18H9.5C9.22386 18 9 17.7761 9 17.5C9 17.2239 9.22386 17 9.5 17H11V15H6C4.89543 15 4 14.1046 4 13V4Z" />
				</svg>
			);
	}
};

IconClamp.iconName = "clamp";

export default IconClamp;
