import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconProfileSwitch = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M18.5 16a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
						clipRule="evenodd"
					/>
					<path d="M8.25 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M15.75 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M8.25 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 12 6M15.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
					<path
						fillRule="evenodd"
						d="M18 3a2 2 0 0 1 2 2v8l-.01.204A2 2 0 0 1 18 15H6l-.204-.01a2 2 0 0 1-1.785-1.786L4 13V5a2 2 0 0 1 1.796-1.99L6 3zM6 4.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5z"
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
						d="M15 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
						clipRule="evenodd"
					/>
					<path d="M7 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2M10 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2M13 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2M7 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M13 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
					<path
						fillRule="evenodd"
						d="M14.204 3.01A2 2 0 0 1 16 5v5l-.01.204a2 2 0 0 1-1.786 1.785L14 12H6l-.204-.01a2 2 0 0 1-1.785-1.786L4 10V5a2 2 0 0 1 1.796-1.99L6 3h8zM6 4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-.898-.995L14 4z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconProfileSwitch.iconName = "profile-switch";

export default IconProfileSwitch;
