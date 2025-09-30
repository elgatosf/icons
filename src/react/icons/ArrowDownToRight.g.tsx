import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowDownToRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 3.75C4.5 3.33579 4.16421 3 3.75 3C3.33579 3 3 3.33579 3 3.75V10.75C3 11.8546 3.89543 12.75 5 12.75L18.1893 12.75L13.2197 17.7197C12.9268 18.0126 12.9268 18.4874 13.2197 18.7803C13.5126 19.0732 13.9874 19.0732 14.2803 18.7803L20.5303 12.5303C20.8232 12.2374 20.8232 11.7626 20.5303 11.4697L14.2803 5.21967C13.9874 4.92678 13.5126 4.92678 13.2197 5.21967C12.9268 5.51256 12.9268 5.98744 13.2197 6.28033L18.1893 11.25L5 11.25C4.72386 11.25 4.5 11.0261 4.5 10.75V3.75Z" />
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
					<path d="M4 3.5C4 3.22386 3.77614 3 3.5 3C3.22386 3 3 3.22386 3 3.5V8.5C3 9.60457 3.89543 10.5 5 10.5H14.7929L11.1464 14.1464C10.9512 14.3417 10.9512 14.6583 11.1464 14.8536C11.3417 15.0488 11.6583 15.0488 11.8536 14.8536L16.3536 10.3536C16.5488 10.1583 16.5488 9.84171 16.3536 9.64645L11.8536 5.14645C11.6583 4.95118 11.3417 4.95118 11.1464 5.14645C10.9512 5.34171 10.9512 5.65829 11.1464 5.85355L14.7929 9.5H5C4.44772 9.5 4 9.05228 4 8.5V3.5Z" />
				</svg>
			);
	}
};

IconArrowDownToRight.iconName = "arrow-down-to-right";

export default IconArrowDownToRight;
