import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCheckmarkCircle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
					/>
					<path d="M16.7803 8.71967C17.0732 9.01256 17.0732 9.48744 16.7803 9.78033L10.7803 15.7803C10.4874 16.0732 10.0126 16.0732 9.71967 15.7803L6.71967 12.7803C6.42678 12.4874 6.42678 12.0126 6.71967 11.7197C7.01256 11.4268 7.48744 11.4268 7.78033 11.7197L10.25 14.1893L15.7197 8.71967C16.0126 8.42678 16.4874 8.42678 16.7803 8.71967Z" />
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
					<path d="M11.8536 5.14645C12.0488 5.34171 12.0488 5.65829 11.8536 5.85355L6.85355 10.8536C6.65829 11.0488 6.34171 11.0488 6.14645 10.8536L3.64645 8.35355C3.45118 8.15829 3.45118 7.84171 3.64645 7.64645C3.84171 7.45118 4.15829 7.45118 4.35355 7.64645L6.5 9.79289L11.1464 5.14645C11.3417 4.95118 11.6583 4.95118 11.8536 5.14645Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
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
					<path d="M13.8536 7.85355C14.0488 7.65829 14.0488 7.34171 13.8536 7.14645C13.6583 6.95118 13.3417 6.95118 13.1464 7.14645L8.5 11.7929L6.35355 9.64645C6.15829 9.45118 5.84171 9.45118 5.64645 9.64645C5.45118 9.84171 5.45118 10.1583 5.64645 10.3536L8.14645 12.8536C8.24021 12.9473 8.36739 13 8.5 13C8.63261 13 8.75979 12.9473 8.85355 12.8536L13.8536 7.85355Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
					/>
				</svg>
			);
	}
};

IconCheckmarkCircle.iconName = "checkmark-circle";

export default IconCheckmarkCircle;
