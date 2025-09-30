import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowForeground = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M14.541 10.5C15.648 10.5002 16.5 11.3189 16.5 12.4385V20.0615C16.5 21.0415 15.6881 21.9998 14.541 22H3.95898C2.85205 21.9998 2 21.1811 2 20.0615V12.4385C2 11.4585 2.81188 10.5002 3.95898 10.5H14.541ZM3.5 20C3.5 20.2761 3.72386 20.5 4 20.5H14.5C14.7761 20.5 15 20.2761 15 20V15H3.5V20ZM4 12C3.72386 12 3.5 12.2239 3.5 12.5V13.5H15V12.5C15 12.2239 14.7761 12 14.5 12H4Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M20.2451 2.00977C21.251 2.10378 22 2.88874 22 3.93848V11.5615C22 12.5415 21.1881 13.4998 20.041 13.5H18.75C18.3358 13.5 18 13.1642 18 12.75C18 12.3358 18.3358 12 18.75 12H20C20.2761 12 20.5 11.7761 20.5 11.5V6.5H9V8.25C9 8.66421 8.66421 9 8.25 9C7.83579 9 7.5 8.66421 7.5 8.25V3.93848C7.5 2.95848 8.31188 2.00018 9.45898 2H20.041L20.2451 2.00977ZM9.5 3.5C9.22386 3.5 9 3.72386 9 4V5H20.5V4C20.5 3.72386 20.2761 3.5 20 3.5H9.5Z"
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
					<path d="M9 7C10.1046 7 11 7.89543 11 9V13C11 14.1046 10.1046 15 9 15H3C1.89543 15 1 14.1046 1 13V9C1 7.89543 1.89543 7 3 7H9ZM2 13C2 13.5523 2.44772 14 3 14H9C9.55229 14 10 13.5523 10 13V10H2V13ZM3 8C2.44772 8 2 8.44772 2 9H10C10 8.44772 9.55229 8 9 8H3ZM13 1C14.0761 1 15 1.92386 15 3V7C15 8.07614 14.0761 9 13 9H12.5C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8H13C13.5239 8 14 7.52386 14 7V4H6V5.5C6 5.77614 5.77614 6 5.5 6C5.22386 6 5 5.77614 5 5.5V3C5 1.92386 5.92386 1 7 1H13ZM7 2C6.47614 2 6 2.47614 6 3H14C14 2.47614 13.5239 2 13 2H7Z" />
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
						d="M11.2041 9.01074C12.2128 9.113 13 9.96435 13 11V16L12.9893 16.2041C12.8938 17.1457 12.1457 17.8938 11.2041 17.9893L11 18H4L3.7959 17.9893C2.85435 17.8938 2.1062 17.1457 2.01074 16.2041L2 16V11C2 9.96435 2.78722 9.113 3.7959 9.01074L4 9H11L11.2041 9.01074ZM3 16C3 16.5523 3.44772 17 4 17H11C11.5523 17 12 16.5523 12 16V12.5H3V16ZM4 10C3.44772 10 3 10.4477 3 11V11.5H12V11C12 10.4477 11.5523 10 11 10H4Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16.2041 2.01074C17.2128 2.113 18 2.96435 18 4V9L17.9893 9.2041C17.887 10.2128 17.0357 11 16 11H14.5C14.2239 11 14 10.7761 14 10.5C14 10.2239 14.2239 10 14.5 10H16C16.5523 10 17 9.55228 17 9V5.5H8V7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5V4C7 2.96435 7.78722 2.113 8.7959 2.01074L9 2H16L16.2041 2.01074ZM9 3C8.44772 3 8 3.44772 8 4V4.5H17V4C17 3.44772 16.5523 3 16 3H9Z"
					/>
				</svg>
			);
	}
};

IconWindowForeground.iconName = "window-foreground";

export default IconWindowForeground;
