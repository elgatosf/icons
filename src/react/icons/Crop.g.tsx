import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCrop = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6.75 2C7.16421 2 7.5 2.33579 7.5 2.75V6H16C17.1046 6 18 6.89543 18 8V16.5H21.25C21.6642 16.5 22 16.8358 22 17.25C22 17.6642 21.6642 18 21.25 18H18V21.25C18 21.6642 17.6642 22 17.25 22C16.8358 22 16.5 21.6642 16.5 21.25V18H8C6.89543 18 6 17.1046 6 16V7.5H2.75C2.33579 7.5 2 7.16421 2 6.75C2 6.33579 2.33579 6 2.75 6H6V2.75C6 2.33579 6.33579 2 6.75 2ZM7.5 16C7.5 16.2761 7.72386 16.5 8 16.5H16.5V8C16.5 7.72386 16.2761 7.5 16 7.5H7.5V16Z"
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
						d="M4.5 1C4.77614 1 5 1.22386 5 1.5V4H10C11.1046 4 12 4.89543 12 6V11H14.5C14.7761 11 15 11.2239 15 11.5C15 11.7761 14.7761 12 14.5 12H12V14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5V12H6C4.89543 12 4 11.1046 4 10V5H1.5C1.22386 5 1 4.77614 1 4.5C1 4.22386 1.22386 4 1.5 4H4V1.5C4 1.22386 4.22386 1 4.5 1ZM5 10C5 10.5523 5.44772 11 6 11H11V6C11 5.44772 10.5523 5 10 5H5V10Z"
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
						d="M5.5 2C5.77614 2 6 2.22386 6 2.5V5H13C14.1046 5 15 5.89543 15 7V14H17.5C17.7761 14 18 14.2239 18 14.5C18 14.7761 17.7761 15 17.5 15H15V17.5C15 17.7761 14.7761 18 14.5 18C14.2239 18 14 17.7761 14 17.5V15H7C5.89543 15 5 14.1046 5 13V6H2.5C2.22386 6 2 5.77614 2 5.5C2 5.22386 2.22386 5 2.5 5H5V2.5C5 2.22386 5.22386 2 5.5 2ZM6 13C6 13.5523 6.44772 14 7 14H14V7C14 6.44772 13.5523 6 13 6H6V13Z"
					/>
				</svg>
			);
	}
};

IconCrop.iconName = "crop";

export default IconCrop;
