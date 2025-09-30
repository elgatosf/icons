import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChevronLeft = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M13.7803 7.21967C14.0732 7.51256 14.0732 7.98744 13.7803 8.28033L10.0607 12L13.7803 15.7197C14.0732 16.0126 14.0732 16.4874 13.7803 16.7803C13.4874 17.0732 13.0126 17.0732 12.7197 16.7803L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L12.7197 7.21967C13.0126 6.92678 13.4874 6.92678 13.7803 7.21967Z" />
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
						d="M9.85355 4.64645C9.65829 4.45118 9.34171 4.45118 9.14645 4.64645L6.14645 7.64645C5.95118 7.84171 5.95118 8.15829 6.14645 8.35355L9.14645 11.3536C9.34171 11.5488 9.65829 11.5488 9.85355 11.3536C10.0488 11.1583 10.0488 10.8417 9.85355 10.6464L7.20711 8L9.85355 5.35355C10.0488 5.15829 10.0488 4.84171 9.85355 4.64645Z"
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
						d="M11.8536 13.8536C12.0488 13.6583 12.0488 13.3417 11.8536 13.1464L8.70711 10L11.8536 6.85355C12.0488 6.65829 12.0488 6.34171 11.8536 6.14645C11.6583 5.95118 11.3417 5.95118 11.1464 6.14645L7.64645 9.64645C7.45118 9.84171 7.45118 10.1583 7.64645 10.3536L11.1464 13.8536C11.3417 14.0488 11.6583 14.0488 11.8536 13.8536Z"
					/>
				</svg>
			);
	}
};

IconChevronLeft.iconName = "chevron-left";

export default IconChevronLeft;
