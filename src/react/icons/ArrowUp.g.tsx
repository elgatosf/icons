import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowUp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 21C12.4142 21 12.75 20.6642 12.75 20.25V5.81066L17.7197 10.7803C18.0126 11.0732 18.4874 11.0732 18.7803 10.7803C19.0732 10.4874 19.0732 10.0126 18.7803 9.71967L12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L5.21967 9.71967C4.92678 10.0126 4.92678 10.4874 5.21967 10.7803C5.51256 11.0732 5.98744 11.0732 6.28033 10.7803L11.25 5.81066V20.25C11.25 20.6642 11.5858 21 12 21Z" />
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
						d="M10 17C10.2761 17 10.5 16.7761 10.5 16.5V5.20711L14.1464 8.85355C14.3417 9.04882 14.6583 9.04882 14.8536 8.85355C15.0488 8.65829 15.0488 8.34171 14.8536 8.14645L10.3536 3.64645C10.1583 3.45118 9.84171 3.45118 9.64645 3.64645L5.14645 8.14645C4.95118 8.34171 4.95118 8.65829 5.14645 8.85355C5.34171 9.04882 5.65829 9.04882 5.85355 8.85355L9.5 5.20711V16.5C9.5 16.7761 9.72386 17 10 17Z"
					/>
				</svg>
			);
	}
};

IconArrowUp.iconName = "arrow-up";

export default IconArrowUp;
