import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCalendarToday = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M9.653 11.508A1.5 1.5 0 0 1 11 13v2l-.008.153a1.5 1.5 0 0 1-1.339 1.34L9.5 16.5h-2l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L6 15v-2a1.5 1.5 0 0 1 1.347-1.492L7.5 11.5h2zM7.5 15h2v-2h-2z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M16.25 2a.75.75 0 0 1 .75.75V4h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2.75a.75.75 0 0 1 1.5 0V4h7V2.75a.75.75 0 0 1 .75-.75M4.5 19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-9h-15zM5 5.5a.5.5 0 0 0-.5.5v2.5h15V6a.5.5 0 0 0-.5-.5z"
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
					<path
						fillRule="evenodd"
						d="M8.103 9.005A1 1 0 0 1 9 10v2l-.005.102A1 1 0 0 1 8 13H6l-.103-.005A1 1 0 0 1 5 12v-2a1 1 0 0 1 1-1h2zM6 12h2v-2H6z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M13.5 2a.5.5 0 0 1 .5.5V4h1l.204.01A2 2 0 0 1 17 6v9l-.01.204a2 2 0 0 1-1.786 1.785L15 17H5l-.204-.01a2 2 0 0 1-1.785-1.786L3 15V6a2 2 0 0 1 1.796-1.99L5 4h1V2.5a.5.5 0 0 1 1 0V4h6V2.5a.5.5 0 0 1 .5-.5M4 15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H4zM5 5a1 1 0 0 0-1 1v1h12V6a1 1 0 0 0-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCalendarToday.iconName = "calendar-today";

export default IconCalendarToday;
