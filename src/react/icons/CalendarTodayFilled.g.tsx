import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCalendarTodayFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.5 11.5A1.5 1.5 0 0 1 11 13v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 6 15v-2a1.5 1.5 0 0 1 1.5-1.5z" />
					<path
						fillRule="evenodd"
						d="M16.25 2a.75.75 0 0 1 .75.75V4h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2.75a.75.75 0 0 1 1.5 0V4h7V2.75a.75.75 0 0 1 .75-.75M4.5 19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-9h-15z"
						clipRule="evenodd"
					/>
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
					<path d="M8 9a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" />
					<path
						fillRule="evenodd"
						d="M13.5 2a.5.5 0 0 1 .5.5V4h1l.204.01A2 2 0 0 1 17 6v9l-.01.204a2 2 0 0 1-1.786 1.785L15 17H5l-.204-.01a2 2 0 0 1-1.785-1.786L3 15V6a2 2 0 0 1 1.796-1.99L5 4h1V2.5a.5.5 0 0 1 1 0V4h6V2.5a.5.5 0 0 1 .5-.5M4 15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H4z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCalendarTodayFilled.iconName = "calendar-today--filled";

export default IconCalendarTodayFilled;
