import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVolume0Filled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.29289 20.2928L5 15.9999H3C1.89543 15.9999 1 15.1045 1 13.9999V9.9999C1 8.89533 1.89543 7.9999 3 7.9999H5L9.29289 3.70701C9.92286 3.07704 11 3.52321 11 4.41411V19.5857C11 20.4766 9.92286 20.9228 9.29289 20.2928Z"
					/>
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
						d="M9 3.50001C9 3.29778 8.87818 3.11547 8.69134 3.03807C8.5045 2.96068 8.28945 3.00346 8.14645 3.14646L4.29289 7.00001H3C1.89543 7.00001 1 7.89545 1 9.00001V11C1 12.1046 1.89543 13 3 13H4.29289L8.14645 16.8536C8.28945 16.9966 8.5045 17.0393 8.69134 16.962C8.87818 16.8846 9 16.7022 9 16.5V3.50001Z"
					/>
				</svg>
			);
	}
};

IconVolume0Filled.iconName = "volume0--filled";

export default IconVolume0Filled;
