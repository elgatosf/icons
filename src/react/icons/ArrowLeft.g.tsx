import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowLeft = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75L5.81066 12.75L10.7803 17.7197C11.0732 18.0126 11.0732 18.4874 10.7803 18.7803C10.4874 19.0732 10.0126 19.0732 9.71967 18.7803L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.71967 5.21967C10.0126 4.92678 10.4874 4.92678 10.7803 5.21967C11.0732 5.51256 11.0732 5.98744 10.7803 6.28033L5.81066 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12Z" />
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
						d="M17 10C17 10.2761 16.7761 10.5 16.5 10.5L5.20711 10.5L8.85355 14.1464C9.04882 14.3417 9.04882 14.6583 8.85355 14.8536C8.65829 15.0488 8.34171 15.0488 8.14645 14.8536L3.64645 10.3536C3.45118 10.1583 3.45118 9.84171 3.64645 9.64645L8.14645 5.14645C8.34171 4.95118 8.65829 4.95118 8.85355 5.14645C9.04882 5.34171 9.04882 5.65829 8.85355 5.85355L5.20711 9.5L16.5 9.5C16.7761 9.5 17 9.72386 17 10Z"
					/>
				</svg>
			);
	}
};

IconArrowLeft.iconName = "arrow-left";

export default IconArrowLeft;
