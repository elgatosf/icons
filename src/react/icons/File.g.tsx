import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFile = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M20 10.25V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H11.75L20 10.25ZM18.5 11H13C11.8954 11 11 10.1046 11 9V3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V20C5.5 20.2761 5.72386 20.5 6 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V11ZM17.1287 9.5L12.5 4.87132V9C12.5 9.27614 12.7239 9.5 13 9.5H17.1287Z"
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
						d="M4 4C4 2.89543 4.89543 2 6 2H10.6716C11.202 2 11.7107 2.21071 12.0858 2.58579L15.4142 5.91421C15.7893 6.28929 16 6.79799 16 7.32843V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4ZM15 16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16V4C5 3.44772 5.44772 3 6 3H10V6C10 7.10457 10.8954 8 12 8H15V16ZM14.9445 7H12C11.4477 7 11 6.55228 11 6V3.05547C11.1412 3.10457 11.271 3.18518 11.3787 3.29289L14.7071 6.62132C14.8148 6.72904 14.8954 6.8588 14.9445 7Z"
					/>
				</svg>
			);
	}
};

IconFile.iconName = "file";

export default IconFile;
