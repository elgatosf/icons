import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPanelLeft = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm8-.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H10zm-1.5 0H4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4.5z"
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
						d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm6-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8zM7 5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconPanelLeft.iconName = "panel-left";

export default IconPanelLeft;
