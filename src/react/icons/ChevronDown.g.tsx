import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChevronDown = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.21967 10.2197C7.51256 9.92678 7.98744 9.92678 8.28033 10.2197L12 13.9393L15.7197 10.2197C16.0126 9.92678 16.4874 9.92678 16.7803 10.2197C17.0732 10.5126 17.0732 10.9874 16.7803 11.2803L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L7.21967 11.2803C6.92678 10.9874 6.92678 10.5126 7.21967 10.2197Z" />
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
						d="M6.14645 8.14645C6.34171 7.95118 6.65829 7.95118 6.85355 8.14645L10 11.2929L13.1464 8.14645C13.3417 7.95118 13.6583 7.95118 13.8536 8.14645C14.0488 8.34171 14.0488 8.65829 13.8536 8.85355L10.3536 12.3536C10.1583 12.5488 9.84171 12.5488 9.64645 12.3536L6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645Z"
					/>
				</svg>
			);
	}
};

IconChevronDown.iconName = "chevron-down";

export default IconChevronDown;
