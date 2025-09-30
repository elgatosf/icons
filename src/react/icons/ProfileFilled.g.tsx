import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconProfileFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9 8.5H11.25V11.25H8.5V9C8.5 8.72386 8.72386 8.5 9 8.5Z" />
					<path d="M8.5 12.75V15C8.5 15.2761 8.72386 15.5 9 15.5H11.25V12.75H8.5Z" />
					<path d="M12.75 12.75V15.5H15C15.2761 15.5 15.5 15.2761 15.5 15V12.75H12.75Z" />
					<path d="M15.5 11.25V9C15.5 8.72386 15.2761 8.5 15 8.5H12.75V11.25H15.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 9C7 7.89543 7.89543 7 9 7H15C16.1046 7 17 7.89543 17 9V15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V9Z"
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
					<path d="M8 7H9.5V9.5H7V8C7 7.44772 7.44772 7 8 7Z" />
					<path d="M13 9.5V8C13 7.44772 12.5523 7 12 7H10.5V9.5H13Z" />
					<path d="M10.5 10.5H13V12C13 12.5523 12.5523 13 12 13H10.5V10.5Z" />
					<path d="M9.5 10.5V13H8C7.44772 13 7 12.5523 7 12V10.5H9.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3H5ZM6 8C6 6.89543 6.89543 6 8 6H12C13.1046 6 14 6.89543 14 8V12C14 13.1046 13.1046 14 12 14H8C6.89543 14 6 13.1046 6 12V8Z"
					/>
				</svg>
			);
	}
};

IconProfileFilled.iconName = "profile--filled";

export default IconProfileFilled;
