import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPanelRight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M22 6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6ZM14 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V18C3.5 18.2761 3.72386 18.5 4 18.5H14V5.5ZM15.5 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V18C20.5 18.2761 20.2761 18.5 20 18.5H15.5V5.5Z"
					/>
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
						d="M18 6C18 4.89543 17.1046 4 16 4H4C2.89543 4 2 4.89543 2 6V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V6ZM12 5H4C3.44772 5 3 5.44772 3 6V14C3 14.5523 3.44772 15 4 15H12V5ZM13 5H16C16.5523 5 17 5.44772 17 6V14C17 14.5523 16.5523 15 16 15H13V5Z"
					/>
				</svg>
			);
	}
};

IconPanelRight.iconName = "panel-right";

export default IconPanelRight;
