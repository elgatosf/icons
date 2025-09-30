import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconArrowDown = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V18.1893L17.7197 13.2197C18.0126 12.9268 18.4874 12.9268 18.7803 13.2197C19.0732 13.5126 19.0732 13.9874 18.7803 14.2803L12.5303 20.5303C12.2374 20.8232 11.7626 20.8232 11.4697 20.5303L5.21967 14.2803C4.92678 13.9874 4.92678 13.5126 5.21967 13.2197C5.51256 12.9268 5.98744 12.9268 6.28033 13.2197L11.25 18.1893V3.75C11.25 3.33579 11.5858 3 12 3Z" />
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
						d="M10 3C10.2761 3 10.5 3.22386 10.5 3.5V14.7929L14.1464 11.1464C14.3417 10.9512 14.6583 10.9512 14.8536 11.1464C15.0488 11.3417 15.0488 11.6583 14.8536 11.8536L10.3536 16.3536C10.1583 16.5488 9.84171 16.5488 9.64645 16.3536L5.14645 11.8536C4.95118 11.6583 4.95118 11.3417 5.14645 11.1464C5.34171 10.9512 5.65829 10.9512 5.85355 11.1464L9.5 14.7929V3.5C9.5 3.22386 9.72386 3 10 3Z"
					/>
				</svg>
			);
	}
};

IconArrowDown.iconName = "arrow-down";

export default IconArrowDown;
