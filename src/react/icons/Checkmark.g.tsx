import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCheckmark = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M19.7803 7.21967C20.0732 7.51256 20.0732 7.98744 19.7803 8.28033L10.2803 17.7803C9.98744 18.0732 9.51256 18.0732 9.21967 17.7803L4.21967 12.7803C3.92678 12.4874 3.92678 12.0126 4.21967 11.7197C4.51256 11.4268 4.98744 11.4268 5.28033 11.7197L9.75 16.1893L18.7197 7.21967C19.0126 6.92678 19.4874 6.92678 19.7803 7.21967Z" />
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
						d="M15.8536 6.14645C16.0488 6.34171 16.0488 6.65829 15.8536 6.85355L8.85355 13.8536C8.65829 14.0488 8.34171 14.0488 8.14645 13.8536L4.14645 9.85355C3.95118 9.65829 3.95118 9.34171 4.14645 9.14645C4.34171 8.95118 4.65829 8.95118 4.85355 9.14645L8.5 12.7929L15.1464 6.14645C15.3417 5.95118 15.6583 5.95118 15.8536 6.14645Z"
					/>
				</svg>
			);
	}
};

IconCheckmark.iconName = "checkmark";

export default IconCheckmark;
