import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowForegroundFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M16.5 20C16.5 21.1046 15.6046 22 14.5 22H4C2.89543 22 2 21.1046 2 20V15H16.5V20Z" />
					<path d="M14.5 10.5C15.6046 10.5 16.5 11.3954 16.5 12.5V13.5H2V12.5C2 11.3954 2.89543 10.5 4 10.5H14.5Z" />
					<path d="M22 11.5C22 12.6046 21.1046 13.5 20 13.5H18.75C18.3358 13.5 18 13.1642 18 12.75V12.5C18 10.567 16.433 9 14.5 9H8.25C7.83579 9 7.5 8.66421 7.5 8.25V6.5H22V11.5Z" />
					<path d="M20 2C21.1046 2 22 2.89543 22 4V5H7.5V4C7.5 2.89543 8.39543 2 9.5 2H20Z" />
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
					<path d="M11 13C11 14.1046 10.1046 15 9 15H3C1.89543 15 1 14.1046 1 13V10H11V13Z" />
					<path d="M9 7C10.1046 7 11 7.89543 11 9H1C1 7.89543 1.89543 7 3 7H9Z" />
					<path d="M15 7C15 8.10457 14.1046 9 13 9H12.5C12.2239 9 12 8.77614 12 8.5C12 7.11929 10.8807 6 9.5 6H5.5C5.22386 6 5 5.77614 5 5.5V4H15V7Z" />
					<path d="M13 1C14.1046 1 15 1.89543 15 3H5C5 1.89543 5.89543 1 7 1H13Z" />
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
					<path d="M13 16C13 17.1046 12.1046 18 11 18H4C2.89543 18 2 17.1046 2 16V12.5H13V16Z" />
					<path d="M11 9C12.1046 9 13 9.89543 13 11V11.5H2V11C2 9.89543 2.89543 9 4 9H11Z" />
					<path d="M18 9L17.9893 9.2041C17.887 10.2128 17.0357 11 16 11H14.5C14.2239 11 14 10.7761 14 10.5C14 9.11929 12.8807 8 11.5 8H7.5C7.22386 8 7 7.77614 7 7.5V5.5H18V9Z" />
					<path d="M16.2041 2.01074C17.2128 2.113 18 2.96435 18 4V4.5H7V4C7 2.96435 7.78722 2.113 8.7959 2.01074L9 2H16L16.2041 2.01074Z" />
				</svg>
			);
	}
};

IconWindowForegroundFilled.iconName = "window-foreground--filled";

export default IconWindowForegroundFilled;
