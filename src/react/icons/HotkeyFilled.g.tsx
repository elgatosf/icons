import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHotkeyFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H5C3.89543 11 3 10.1046 3 9V5ZM6 6.75C6 6.33579 6.33579 6 6.75 6H11.25C11.6642 6 12 6.33579 12 6.75C12 7.16421 11.6642 7.5 11.25 7.5H6.75C6.33579 7.5 6 7.16421 6 6.75Z"
					/>
					<path d="M3.75 16C3.33579 16 3 16.3358 3 16.75C3 17.1642 3.33579 17.5 3.75 17.5H5.75V19.5C5.75 19.9142 6.08579 20.25 6.5 20.25C6.91421 20.25 7.25 19.9142 7.25 19.5V17.5H9.25C9.66421 17.5 10 17.1642 10 16.75C10 16.3358 9.66421 16 9.25 16H7.25V14C7.25 13.5858 6.91421 13.25 6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14V16H3.75Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 15C12 13.8954 12.8954 13 14 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H14C12.8954 21 12 20.1046 12 19V15ZM15 16.75C15 16.3358 15.3358 16 15.75 16H17.25C17.6642 16 18 16.3358 18 16.75C18 17.1642 17.6642 17.5 17.25 17.5H15.75C15.3358 17.5 15 17.1642 15 16.75Z"
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
						d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H15C16.1046 9 17 8.10457 17 7V5C17 3.89543 16.1046 3 15 3H5ZM5.5 5.5C5.22386 5.5 5 5.72386 5 6C5 6.27614 5.22386 6.5 5.5 6.5H9.5C9.77614 6.5 10 6.27614 10 6C10 5.72386 9.77614 5.5 9.5 5.5H5.5Z"
					/>
					<path d="M6 12C6 11.7239 5.77614 11.5 5.5 11.5C5.22386 11.5 5 11.7239 5 12V13.5H3.5C3.22386 13.5 3 13.7239 3 14C3 14.2761 3.22386 14.5 3.5 14.5H5V16C5 16.2761 5.22386 16.5 5.5 16.5C5.77614 16.5 6 16.2761 6 16V14.5H7.5C7.77614 14.5 8 14.2761 8 14C8 13.7239 7.77614 13.5 7.5 13.5H6V12Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10 13C10 11.8954 10.8954 11 12 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H12C10.8954 17 10 16.1046 10 15V13ZM12 14C12 13.7239 12.2239 13.5 12.5 13.5H14.5C14.7761 13.5 15 13.7239 15 14C15 14.2761 14.7761 14.5 14.5 14.5H12.5C12.2239 14.5 12 14.2761 12 14Z"
					/>
				</svg>
			);
	}
};

IconHotkeyFilled.iconName = "hotkey--filled";

export default IconHotkeyFilled;
