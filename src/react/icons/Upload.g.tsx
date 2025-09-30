import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconUpload = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M17.7803 9.53033C17.4874 9.82322 17.0126 9.82322 16.7197 9.53033L12.75 5.56066L12.75 17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17L11.25 5.56066L7.28033 9.53033C6.98744 9.82322 6.51256 9.82322 6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967L11.4697 3.21967C11.7626 2.92678 12.2374 2.92678 12.5303 3.21967L17.7803 8.46967C18.0732 8.76256 18.0732 9.23744 17.7803 9.53033Z" />
					<path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75Z" />
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
					<path d="M10.5 13.5C10.5 13.7761 10.2761 14 10 14C9.72386 14 9.5 13.7761 9.5 13.5V4.20711L5.85355 7.85355C5.65829 8.04882 5.34171 8.04882 5.14645 7.85355C4.95118 7.65829 4.95118 7.34171 5.14645 7.14645L9.64645 2.64645C9.84171 2.45118 10.1583 2.45118 10.3536 2.64645L14.8536 7.14645C15.0488 7.34171 15.0488 7.65829 14.8536 7.85355C14.6583 8.04882 14.3417 8.04882 14.1464 7.85355L10.5 4.20711V13.5Z" />
					<path d="M3.5 16C3.22386 16 3 16.2239 3 16.5C3 16.7761 3.22386 17 3.5 17H16.5C16.7761 17 17 16.7761 17 16.5C17 16.2239 16.7761 16 16.5 16H3.5Z" />
				</svg>
			);
	}
};

IconUpload.iconName = "upload";

export default IconUpload;
