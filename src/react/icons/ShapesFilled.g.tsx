import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconShapesFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M21.0001 7C21.0001 9.20914 19.2092 11 17.0001 11C14.7909 11 13.0001 9.20914 13.0001 7C13.0001 4.79086 14.7909 3 17.0001 3C19.2092 3 21.0001 4.79086 21.0001 7Z" />
					<path d="M13.0001 15C13.0001 13.8954 13.8955 13 15.0001 13H19.0001C20.1046 13 21.0001 13.8954 21.0001 15V19C21.0001 20.1046 20.1046 21 19.0001 21H15.0001C13.8955 21 13.0001 20.1046 13.0001 19V15Z" />
					<path d="M3.00006 5C3.00006 3.89543 3.89549 3 5.00006 3H9.00006C10.1046 3 11.0001 3.89543 11.0001 5V9C11.0001 10.1046 10.1046 11 9.00006 11H5.00006C3.89549 11 3.00006 10.1046 3.00006 9V5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.73213 14.25C7.96233 12.9167 6.03783 12.9167 5.26803 14.25L3.10296 18C2.33316 19.3333 3.29541 21 4.83502 21H9.16514C10.7047 21 11.667 19.3333 10.8972 18L8.73213 14.25Z"
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
					<path d="M2.99999 4.5C2.99999 3.67157 3.67156 3 4.49999 3H7.49999C8.32841 3 8.99999 3.67157 8.99999 4.5V7.5C8.99999 8.32843 8.32841 9 7.49999 9H4.49999C3.67156 9 2.99999 8.32843 2.99999 7.5V4.5Z" />
					<path d="M11 12.5C11 11.6716 11.6716 11 12.5 11H15.5C16.3284 11 17 11.6716 17 12.5V15.5C17 16.3284 16.3284 17 15.5 17H12.5C11.6716 17 11 16.3284 11 15.5V12.5Z" />
					<path d="M11 6C11 4.34315 12.3431 3 14 3C15.6568 3 17 4.34315 17 6C17 7.65685 15.6568 9 14 9C12.3431 9 11 7.65685 11 6Z" />
					<path d="M7.29907 11.75C6.72172 10.75 5.27835 10.75 4.701 11.75L2.96895 14.75C2.3916 15.75 3.11329 17 4.26799 17H7.73209C8.88679 17 9.60847 15.75 9.03112 14.75L7.29907 11.75Z" />
				</svg>
			);
	}
};

IconShapesFilled.iconName = "shapes--filled";

export default IconShapesFilled;
