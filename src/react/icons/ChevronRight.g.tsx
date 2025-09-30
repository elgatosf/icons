import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChevronRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10.2197 16.7803C9.92678 16.4874 9.92678 16.0126 10.2197 15.7197L13.9393 12L10.2197 8.28033C9.92678 7.98744 9.92678 7.51256 10.2197 7.21967C10.5126 6.92678 10.9874 6.92678 11.2803 7.21967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L11.2803 16.7803C10.9874 17.0732 10.5126 17.0732 10.2197 16.7803Z" />
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
						d="M6.14645 4.64645C6.34171 4.45118 6.65829 4.45118 6.85355 4.64645L9.85355 7.64645C10.0488 7.84171 10.0488 8.15829 9.85355 8.35355L6.85355 11.3536C6.65829 11.5488 6.34171 11.5488 6.14645 11.3536C5.95118 11.1583 5.95118 10.8417 6.14645 10.6464L8.79289 8L6.14645 5.35355C5.95118 5.15829 5.95118 4.84171 6.14645 4.64645Z"
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
						d="M8.14645 13.8536C7.95118 13.6583 7.95118 13.3417 8.14645 13.1464L11.2929 10L8.14645 6.85355C7.95118 6.65829 7.95118 6.34171 8.14645 6.14645C8.34171 5.95118 8.65829 5.95118 8.85355 6.14645L12.3536 9.64645C12.5488 9.84171 12.5488 10.1583 12.3536 10.3536L8.85355 13.8536C8.65829 14.0488 8.34171 14.0488 8.14645 13.8536Z"
					/>
				</svg>
			);
	}
};

IconChevronRight.iconName = "chevron-right";

export default IconChevronRight;
