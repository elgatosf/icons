import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAdjustVerticalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 8.75C4 10.5642 5.28832 12.0775 7 12.425L7 21.25C7 21.6642 7.33579 22 7.75 22C8.16421 22 8.5 21.6642 8.5 21.25L8.5 12.425C10.2117 12.0775 11.5 10.5642 11.5 8.75C11.5 6.93578 10.2117 5.42247 8.5 5.07501L8.5 2.75C8.5 2.33578 8.16421 2 7.75 2C7.33579 2 7 2.33578 7 2.75L7 5.07501C5.28832 5.42247 4 6.93578 4 8.75Z" />
					<path d="M12.5 15.25C12.5 13.4358 13.7883 11.9225 15.5 11.575V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V11.575C18.7117 11.9225 20 13.4358 20 15.25C20 17.0642 18.7117 18.5775 17 18.925L17 21.25C17 21.6642 16.6642 22 16.25 22C15.8358 22 15.5 21.6642 15.5 21.25L15.5 18.925C13.7883 18.5775 12.5 17.0642 12.5 15.25Z" />
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
						d="M14 14.95L14 17.5C14 17.7761 13.7761 18 13.5 18C13.2239 18 13 17.7761 13 17.5L13 14.95C11.8589 14.7184 11 13.7095 11 12.5C11 11.2905 11.8589 10.2816 13 10.05L13 2.5C13 2.22386 13.2239 2 13.5 2C13.7761 2 14 2.22386 14 2.5L14 10.05C15.1411 10.2816 16 11.2905 16 12.5C16 13.7095 15.1411 14.7184 14 14.95Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7 9.94999C8.14112 9.71836 9 8.70948 9 7.5C9 6.29052 8.14112 5.28164 7 5.05001L7 2.5C7 2.22386 6.77614 2 6.5 2C6.22386 2 6 2.22386 6 2.5L6 5.05001C4.85888 5.28164 4 6.29052 4 7.5C4 8.70948 4.85888 9.71836 6 9.94999L6 17.5C6 17.7761 6.22386 18 6.5 18C6.77614 18 7 17.7761 7 17.5L7 9.94999Z"
					/>
				</svg>
			);
	}
};

IconAdjustVerticalFilled.iconName = "adjust-vertical--filled";

export default IconAdjustVerticalFilled;
