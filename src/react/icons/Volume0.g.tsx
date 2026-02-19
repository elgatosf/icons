import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVolume0 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M9.29289 20.2928L5 15.9999H3C1.89543 15.9999 1 15.1045 1 13.9999V9.9999C1 8.89533 1.89543 7.9999 3 7.9999H5L9.29289 3.70701C9.92286 3.07704 11 3.52321 11 4.41411V19.5857C11 20.4766 9.92286 20.9228 9.29289 20.2928ZM5.62132 14.4999H3C2.72386 14.4999 2.5 14.276 2.5 13.9999V9.9999C2.5 9.72376 2.72386 9.4999 3 9.4999H5.62132L9.5 5.62122V18.3786L5.62132 14.4999Z"
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
						d="M9 3.50001C9 3.29778 8.87818 3.11547 8.69134 3.03807C8.5045 2.96068 8.28945 3.00346 8.14645 3.14646L4.29289 7.00001H3C1.89543 7.00001 1 7.89545 1 9.00001V11C1 12.1046 1.89543 13 3 13H4.29289L8.14645 16.8536C8.28945 16.9966 8.5045 17.0393 8.69134 16.962C8.87818 16.8846 9 16.7022 9 16.5V3.50001ZM4.85355 7.85357L8 4.70712V15.2929L4.85355 12.1465C4.75979 12.0527 4.63261 12 4.5 12H3C2.44772 12 2 11.5523 2 11V9.00001C2 8.44773 2.44772 8.00001 3 8.00001H4.5C4.63261 8.00001 4.75979 7.94734 4.85355 7.85357Z"
					/>
				</svg>
			);
	}
};

IconVolume0.iconName = "volume0";

export default IconVolume0;
