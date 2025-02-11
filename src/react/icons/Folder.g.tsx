import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolder = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M20 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.075a2 2 0 0 1 1.38.552l1.9 1.81a.5.5 0 0 0 .345.138H20a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2m0-1.5H4a.5.5 0 0 1-.5-.5v-8h17v8a.5.5 0 0 1-.5.5m.5-10h-17V5a.5.5 0 0 1 .5-.5h5.075a.5.5 0 0 1 .345.138l1.9 1.81A2 2 0 0 0 12.7 7H20a.5.5 0 0 1 .5.5z"
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
						d="M9.086 3.586A2 2 0 0 0 7.672 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5.086a1 1 0 0 1-.707-.293zM9.5 5.414 8.379 4.293A1 1 0 0 0 7.672 4H4a1 1 0 0 0-1 1v3h14V7a1 1 0 0 0-1-1h-5.086A2 2 0 0 1 9.5 5.414M3 9h14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconFolder.iconName = "folder";

export default IconFolder;
