import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25L18.1893 11.25L13.2197 6.28033C12.9268 5.98744 12.9268 5.51256 13.2197 5.21967C13.5126 4.92678 13.9874 4.92678 14.2803 5.21967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.2803 18.7803C13.9874 19.0732 13.5126 19.0732 13.2197 18.7803C12.9268 18.4874 12.9268 18.0126 13.2197 17.7197L18.1893 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12Z" />
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
						d="M3 10C3 9.72386 3.22386 9.5 3.5 9.5L14.7929 9.5L11.1464 5.85355C10.9512 5.65829 10.9512 5.34171 11.1464 5.14645C11.3417 4.95118 11.6583 4.95118 11.8536 5.14645L16.3536 9.64645C16.5488 9.84171 16.5488 10.1583 16.3536 10.3536L11.8536 14.8536C11.6583 15.0488 11.3417 15.0488 11.1464 14.8536C10.9512 14.6583 10.9512 14.3417 11.1464 14.1464L14.7929 10.5L3.5 10.5C3.22386 10.5 3 10.2761 3 10Z"
					/>
				</svg>
			);
	}
};

IconArrowRight.iconName = "arrow-right";

export default IconArrowRight;
