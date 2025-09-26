import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconProfileSwitchFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5.5 16a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
						clipRule="evenodd"
					/>
					<path d="M12 16a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
					<path
						fillRule="evenodd"
						d="M18.5 16a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.25 9.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.75 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.75 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M8.25 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 6a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 6m3.75 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
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
						d="M5 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
						clipRule="evenodd"
					/>
					<path d="M10 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
					<path
						fillRule="evenodd"
						d="M15 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M14 3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM7 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconProfileSwitchFilled.iconName = "profile-switch--filled";

export default IconProfileSwitchFilled;
