import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStream = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M5.282 4.222a.75.75 0 0 1 0 1.06 9.5 9.5 0 0 0 0 13.436.75.75 0 1 1-1.06 1.06 11 11 0 0 1 0-15.556.75.75 0 0 1 1.06 0" />
					<path d="M8.11 7.05a.75.75 0 0 1 0 1.061 5.5 5.5 0 0 0 0 7.778.75.75 0 0 1-1.06 1.06 7 7 0 0 1 0-9.899.75.75 0 0 1 1.06 0" />
					<path
						fillRule="evenodd"
						d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
						clipRule="evenodd"
					/>
					<path d="M15.89 15.89a.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.9.75.75 0 1 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778" />
					<path d="M18.718 18.718a.75.75 0 1 0 1.06 1.06 11 11 0 0 0 0-15.556.75.75 0 0 0-1.06 1.06 9.5 9.5 0 0 1 0 13.436" />
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M5.05 4.343a.5.5 0 0 1 0 .707 7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707 0" />
					<path d="M7.172 6.465a.5.5 0 0 1 0 .707 4 4 0 0 0 0 5.657.5.5 0 1 1-.708.707 5 5 0 0 1 0-7.071.5.5 0 0 1 .708 0M14.95 14.95a.5.5 0 0 0 .707.707 8 8 0 0 0 0-11.314.5.5 0 0 0-.707.707 7 7 0 0 1 0 9.9" />
					<path d="M12.828 13.536a.5.5 0 0 1 0-.707 4 4 0 0 0 0-5.657.5.5 0 0 1 .708-.707 5 5 0 0 1 0 7.07.5.5 0 0 1-.708 0" />
					<path
						fillRule="evenodd"
						d="M12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconStream.iconName = "stream";

export default IconStream;
