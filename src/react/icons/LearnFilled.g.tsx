import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLearnFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10.9262 15.9666L2.32567 10.4936C1.70817 10.1006 1.70817 9.1992 2.32567 8.80625L10.9262 3.33319C11.5813 2.91628 12.4185 2.91628 13.0737 3.33319L21.6742 8.80625C22.2917 9.1992 22.2917 10.1006 21.6742 10.4936L21 10.9226V16.2498C21 16.664 20.6642 16.9998 20.25 16.9998C19.8358 16.9998 19.5 16.664 19.5 16.2498V11.8771L13.0737 15.9666C12.4185 16.3835 11.5813 16.3835 10.9262 15.9666Z" />
					<path d="M6.00003 14.6098L10.1209 17.2321C11.2673 17.9617 12.7325 17.9617 13.879 17.2321L18 14.6096V16.6421C18 17.3446 17.6314 17.9956 17.029 18.3571L13.029 20.757C12.3956 21.137 11.6044 21.137 10.971 20.757L6.97101 18.357C6.3686 17.9956 5.99999 17.3445 6 16.642L6.00003 14.6098Z" />
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
					<path d="M9.25 3.20096C9.7141 2.93301 10.2859 2.93301 10.75 3.20096L17.25 6.95374C18.25 7.53109 18.25 8.97446 17.25 9.55181L17 9.69616V14.5C17 14.7762 16.7761 15 16.5 15C16.2239 15 16 14.7762 16 14.5V10.2735L10.75 13.3046C10.2859 13.5725 9.7141 13.5725 9.25 13.3046L2.75 9.55181C1.75 8.97446 1.75 7.53109 2.75 6.95374L9.25 3.20096Z" />
					<path d="M15 12.0056V13.4793C15 14.0152 14.7141 14.5104 14.25 14.7783L10.75 16.799C10.2859 17.067 9.7141 17.067 9.25 16.799L5.75 14.7783C5.2859 14.5104 5 14.0152 5 13.4793V12.0056L8.75 14.1706C9.5235 14.6172 10.4765 14.6172 11.25 14.1706L15 12.0056Z" />
				</svg>
			);
	}
};

IconLearnFilled.iconName = "learn--filled";

export default IconLearnFilled;
