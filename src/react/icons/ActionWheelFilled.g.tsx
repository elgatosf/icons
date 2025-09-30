import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconActionWheelFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6 8.25C6 7.00732 7.00732 6 8.25 6H15.75C16.9927 6 18 7.00732 18 8.25V15.75C18 16.9927 16.9927 18 15.75 18H8.25C7.00732 18 6 16.9927 6 15.75V8.25ZM9.75 13.5002C9.33582 13.5002 9 13.8361 9 14.2502C9 14.6644 9.33582 15.0002 9.75 15.0002H14.25C14.6642 15.0002 15 14.6644 15 14.2502C15 13.8361 14.6642 13.5002 14.25 13.5002H9.75Z"
					/>
					<path d="M3.75 7.5C4.16421 7.5 4.5 7.83579 4.5 8.25L4.5 15.75C4.5 16.1642 4.16421 16.5 3.75 16.5H3H2.25C1.00736 16.5 0 15.4926 0 14.25V9.75C0 8.50736 1.00736 7.5 2.25 7.5H3H3.75Z" />
					<path d="M20.25 16.5C19.8358 16.5 19.5 16.1642 19.5 15.75V8.25C19.5 7.83579 19.8358 7.5 20.25 7.5L21 7.5H21.75C22.9926 7.5 24 8.50736 24 9.75V14.25C24 15.4926 22.9926 16.5 21.75 16.5H21H20.25Z" />
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
						d="M5 7.5C5 6.11929 6.11929 5 7.5 5H12.5C13.8807 5 15 6.11929 15 7.5V12.5C15 13.8807 13.8807 15 12.5 15H7.5C6.11929 15 5 13.8807 5 12.5V7.5ZM8 11.5C8 11.2239 8.22386 11 8.5 11H11.5C11.7761 11 12 11.2239 12 11.5C12 11.7761 11.7761 12 11.5 12H8.5C8.22386 12 8 11.7761 8 11.5Z"
					/>
					<path d="M3.6644 6C3.97661 6 4.18587 6.3289 4.10863 6.6314C4.0377 6.90914 4 7.20017 4 7.5V12.5C4 12.7998 4.0377 13.0909 4.10863 13.3686C4.18587 13.6711 3.97661 14 3.6644 14H3.5C2.11929 14 1 12.8807 1 11.5V8.5C1 7.11929 2.11929 6 3.5 6H3.6644Z" />
					<path d="M16.3356 14C16.0234 14 15.8141 13.6711 15.8914 13.3686C15.9623 13.0909 16 12.7998 16 12.5V7.5C16 7.20017 15.9623 6.90914 15.8914 6.6314C15.8141 6.3289 16.0234 6 16.3356 6H16.5C17.8807 6 19 7.11929 19 8.5V11.5C19 12.8807 17.8807 14 16.5 14H16.3356Z" />
				</svg>
			);
	}
};

IconActionWheelFilled.iconName = "action-wheel--filled";

export default IconActionWheelFilled;
