import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconImage = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M18 8.5C18 9.88071 16.8807 11 15.5 11C14.1193 11 13 9.88071 13 8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5ZM16.5 8.5C16.5 9.05228 16.0523 9.5 15.5 9.5C14.9477 9.5 14.5 9.05228 14.5 8.5C14.5 7.94772 14.9477 7.5 15.5 7.5C16.0523 7.5 16.5 7.94772 16.5 8.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5ZM19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V14.4393L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L14 14.9393L16.4697 12.4697C16.7626 12.1768 17.2374 12.1768 17.5303 12.4697L19.5 14.4393V5C19.5 4.72386 19.2761 4.5 19 4.5ZM9 12.0607L4.5 16.5607V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V16.5607L17 14.0607L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303L9 12.0607Z"
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
						d="M15 7C15 8.10457 14.1046 9 13 9C11.8954 9 11 8.10457 11 7C11 5.89543 11.8954 5 13 5C14.1046 5 15 5.89543 15 7ZM14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3 15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3H5C3.89543 3 3 3.89543 3 5V15ZM15 4H5C4.44772 4 4 4.44772 4 5V11.2929L7.14645 8.14645C7.34171 7.95118 7.65829 7.95118 7.85355 8.14645L11.5 11.7929L13.1464 10.1464C13.3417 9.95118 13.6583 9.95118 13.8536 10.1464L16 12.2929V5C16 4.44772 15.5523 4 15 4ZM16 15V13.7071L13.5 11.2071L11.8536 12.8536C11.6583 13.0488 11.3417 13.0488 11.1464 12.8536L7.5 9.20711L4 12.7071V15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 15.5523 16 15Z"
					/>
				</svg>
			);
	}
};

IconImage.iconName = "image";

export default IconImage;
