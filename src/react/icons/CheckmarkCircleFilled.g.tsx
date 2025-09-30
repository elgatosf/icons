import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCheckmarkCircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7803 8.71967C17.0732 9.01256 17.0732 9.48744 16.7803 9.78033L10.7803 15.7803C10.4874 16.0732 10.0126 16.0732 9.71967 15.7803L6.71967 12.7803C6.42678 12.4874 6.42678 12.0126 6.71967 11.7197C7.01256 11.4268 7.48744 11.4268 7.78033 11.7197L10.25 14.1893L15.7197 8.71967C16.0126 8.42678 16.4874 8.42678 16.7803 8.71967Z"
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
						d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.8536 5.85355C12.0488 5.65829 12.0488 5.34171 11.8536 5.14645C11.6583 4.95118 11.3417 4.95118 11.1464 5.14645L6.5 9.79289L4.35355 7.64645C4.15829 7.45118 3.84171 7.45118 3.64645 7.64645C3.45118 7.84171 3.45118 8.15829 3.64645 8.35355L6.14645 10.8536C6.34171 11.0488 6.65829 11.0488 6.85355 10.8536L11.8536 5.85355Z"
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
						d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.8536 7.85355C14.0488 7.65829 14.0488 7.34171 13.8536 7.14645C13.6583 6.95118 13.3417 6.95118 13.1464 7.14645L8.5 11.7929L6.35355 9.64645C6.15829 9.45118 5.84171 9.45118 5.64645 9.64645C5.45118 9.84171 5.45118 10.1583 5.64645 10.3536L8.14645 12.8536C8.24022 12.9473 8.36739 13 8.5 13C8.63261 13 8.75978 12.9473 8.85355 12.8536L13.8536 7.85355Z"
					/>
				</svg>
			);
	}
};

IconCheckmarkCircleFilled.iconName = "checkmark-circle--filled";

export default IconCheckmarkCircleFilled;
