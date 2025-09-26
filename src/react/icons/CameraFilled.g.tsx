import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
					<path
						fillRule="evenodd"
						d="M2 6.5V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.5a2 2 0 0 0-2-2h-2.76a.5.5 0 0 1-.39-.188L15.6 2.751A2 2 0 0 0 14.04 2H9.96a2 2 0 0 0-1.561.75L7.15 4.313a.5.5 0 0 1-.39.188H4a2 2 0 0 0-2 2M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
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
					<path d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
					<path
						fillRule="evenodd"
						d="M2 15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.5a1 1 0 0 1-.8-.4l-.6-.8a2 2 0 0 0-1.6-.8h-3a2 2 0 0 0-1.6.8l-.6.8a1 1 0 0 1-.8.4H4a2 2 0 0 0-2 2zm12-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCameraFilled.iconName = "camera--filled";

export default IconCameraFilled;
