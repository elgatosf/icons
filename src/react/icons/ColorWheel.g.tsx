import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconColorWheel = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-4.543 6.517a8.46 8.46 0 0 1-4.706 1.95v-3.523a5 5 0 0 0 2.215-.918zm1.06-1.06a8.46 8.46 0 0 0 1.95-4.707h-3.523a5 5 0 0 1-.918 2.215zm0-10.913a8.46 8.46 0 0 1 1.95 4.706h-3.523a5 5 0 0 0-.918-2.215zm-1.06-1.061-2.491 2.491a5 5 0 0 0-2.216-.918V3.533a8.46 8.46 0 0 1 4.707 1.95M6.543 18.518a8.46 8.46 0 0 0 4.708 1.95v-3.524a5 5 0 0 1-2.216-.918zm1.431-3.552a5 5 0 0 1-.918-2.216H3.533a8.46 8.46 0 0 0 1.95 4.707zm-.918-3.716H3.533a8.46 8.46 0 0 1 1.95-4.707l2.491 2.491a5 5 0 0 0-.918 2.216m1.979-3.276a5 5 0 0 1 2.215-.918V3.533a8.46 8.46 0 0 0-4.707 1.95zM15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
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
						d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-3.416 5.29a6.97 6.97 0 0 1-4.083 1.692V13.97c.73-.091 1.4-.38 1.952-.81zm.707-.707a6.97 6.97 0 0 0 1.691-4.083H13.97c-.091.73-.379 1.4-.809 1.952zm0-9.166A6.97 6.97 0 0 1 16.982 9.5H13.97a4 4 0 0 0-.809-1.952zm-.707-.707-2.13 2.13a4 4 0 0 0-1.954-.809V3.018a6.97 6.97 0 0 1 4.084 1.692M5.417 15.29A6.97 6.97 0 0 0 9.5 16.983v-3.014a4 4 0 0 1-1.953-.809zm1.423-2.838a4 4 0 0 1-.809-1.953H3.018a6.97 6.97 0 0 0 1.691 4.084zM6.031 9.5H3.018a6.97 6.97 0 0 1 1.691-4.084L6.84 7.547A4 4 0 0 0 6.031 9.5m1.516-2.66A4 4 0 0 1 9.5 6.031V3.018a6.97 6.97 0 0 0-4.084 1.691zM13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconColorWheel.iconName = "color-wheel";

export default IconColorWheel;
