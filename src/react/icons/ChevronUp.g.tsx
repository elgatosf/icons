import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconChevronUp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M16.7803 14.7803C16.4874 15.0732 16.0126 15.0732 15.7197 14.7803L12 11.0607L8.28033 14.7803C7.98744 15.0732 7.51256 15.0732 7.21967 14.7803C6.92678 14.4874 6.92678 14.0126 7.21967 13.7197L11.4697 9.46967C11.7626 9.17678 12.2374 9.17678 12.5303 9.46967L16.7803 13.7197C17.0732 14.0126 17.0732 14.4874 16.7803 14.7803Z" />
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
						d="M6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536L10 8.70711L13.1464 11.8536C13.3417 12.0488 13.6583 12.0488 13.8536 11.8536C14.0488 11.6583 14.0488 11.3417 13.8536 11.1464L10.3536 7.64645C10.1583 7.45118 9.84171 7.45118 9.64645 7.64645L6.14645 11.1464C5.95118 11.3417 5.95118 11.6583 6.14645 11.8536Z"
					/>
				</svg>
			);
	}
};

IconChevronUp.iconName = "chevron-up";

export default IconChevronUp;
