import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconExternalLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 5C4.5 4.72386 4.72386 4.5 5 4.5H8.25C8.66421 4.5 9 4.16421 9 3.75C9 3.33579 8.66421 3 8.25 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15.75C21 15.3358 20.6642 15 20.25 15C19.8358 15 19.5 15.3358 19.5 15.75V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5Z" />
					<path d="M12.75 3C12.3358 3 12 3.33579 12 3.75C12 4.16421 12.3358 4.5 12.75 4.5H18.4393L11.2197 11.7197C10.9268 12.0126 10.9268 12.4874 11.2197 12.7803C11.5126 13.0732 11.9874 13.0732 12.2803 12.7803L19.5 5.56066V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V3.75C21 3.33579 20.6642 3 20.25 3H12.75Z" />
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
					<path d="M4 5C4 4.44772 4.44772 4 5 4H7.5C7.77614 4 8 3.77614 8 3.5C8 3.22386 7.77614 3 7.5 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V12.5C17 12.2239 16.7761 12 16.5 12C16.2239 12 16 12.2239 16 12.5V15C16 15.5523 15.5523 16 15 16H5C4.44772 16 4 15.5523 4 15V5Z" />
					<path d="M11.5 3C11.2239 3 11 3.22386 11 3.5C11 3.77614 11.2239 4 11.5 4H15.2929L9.14645 10.1464C8.95118 10.3417 8.95118 10.6583 9.14645 10.8536C9.34171 11.0488 9.65829 11.0488 9.85355 10.8536L16 4.70711V8.5C16 8.77614 16.2239 9 16.5 9C16.7761 9 17 8.77614 17 8.5V3.5C17 3.22386 16.7761 3 16.5 3H11.5Z" />
				</svg>
			);
	}
};

IconExternalLink.iconName = "external-link";

export default IconExternalLink;
