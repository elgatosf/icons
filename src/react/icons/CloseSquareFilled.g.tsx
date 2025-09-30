import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCloseSquareFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM7.71967 16.2803C7.42678 15.9874 7.42678 15.5126 7.71967 15.2197L10.9393 12L7.71967 8.78033C7.42678 8.48744 7.42678 8.01256 7.71967 7.71967C8.01256 7.42678 8.48744 7.42678 8.78033 7.71967L12 10.9393L15.2197 7.71967C15.5126 7.42678 15.9874 7.42678 16.2803 7.71967C16.5732 8.01256 16.5732 8.48744 16.2803 8.78033L13.0607 12L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L12 13.0607L8.78033 16.2803C8.48744 16.5732 8.01256 16.5732 7.71967 16.2803Z"
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
						d="M2 4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4ZM5.14645 5.14645C5.34171 4.95118 5.65829 4.95118 5.85355 5.14645L8 7.29289L10.1464 5.14645C10.3417 4.95118 10.6583 4.95118 10.8536 5.14645C11.0488 5.34171 11.0488 5.65829 10.8536 5.85355L8.70711 8L10.8536 10.1464C11.0488 10.3417 11.0488 10.6583 10.8536 10.8536C10.6583 11.0488 10.3417 11.0488 10.1464 10.8536L8 8.70711L5.85355 10.8536C5.65829 11.0488 5.34171 11.0488 5.14645 10.8536C4.95118 10.6583 4.95118 10.3417 5.14645 10.1464L7.29289 8L5.14645 5.85355C4.95118 5.65829 4.95118 5.34171 5.14645 5.14645Z"
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
						d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5ZM6.64645 6.64645C6.84171 6.45118 7.15829 6.45118 7.35355 6.64645L10 9.29289L12.6464 6.64645C12.8417 6.45118 13.1583 6.45118 13.3536 6.64645C13.5488 6.84171 13.5488 7.15829 13.3536 7.35355L10.7071 10L13.3536 12.6464C13.5488 12.8417 13.5488 13.1583 13.3536 13.3536C13.1583 13.5488 12.8417 13.5488 12.6464 13.3536L10 10.7071L7.35355 13.3536C7.15829 13.5488 6.84171 13.5488 6.64645 13.3536C6.45118 13.1583 6.45118 12.8417 6.64645 12.6464L9.29289 10L6.64645 7.35355C6.45118 7.15829 6.45118 6.84171 6.64645 6.64645Z"
					/>
				</svg>
			);
	}
};

IconCloseSquareFilled.iconName = "close-square--filled";

export default IconCloseSquareFilled;
