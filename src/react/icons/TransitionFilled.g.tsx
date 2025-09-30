import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTransitionFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 5.00001C3 3.89544 3.89543 3.00001 5 3.00001L7.5 3V21L5 21C3.89543 21 3 20.1046 3 19V5.00001Z" />
					<path d="M11 3.00001H19C20.1046 3.00001 21 3.89544 21 5.00001V19C21 20.1046 20.1046 21 19 21H11C9.89543 21 9 20.1046 9 19V5.00001C9 3.89544 9.89543 3.00001 11 3.00001Z" />
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
					<path d="M7 3C8.10457 3 9 3.89543 9 5V8C9 8.27614 8.77614 8.5 8.5 8.5H6.5C5.67157 8.5 5 9.17157 5 10C5 10.8284 5.67157 11.5 6.5 11.5H8.5C8.77614 11.5 9 11.7239 9 12V15C9 16.1046 8.10457 17 7 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H7Z" />
					<path d="M15 3C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V14.5C11 14.2239 11.2239 14 11.5 14C11.7761 14 12 14.2239 12 14.5V15C12 15.5523 12.4477 16 13 16H15C15.5523 16 16 15.5523 16 15V5C16 4.44772 15.5523 4 15 4H13C12.4477 4 12 4.44772 12 5V5.5C12 5.77614 11.7761 6 11.5 6C11.2239 6 11 5.77614 11 5.5V5C11 3.89543 11.8954 3 13 3H15Z" />
					<path d="M11.1465 7.14648C11.3417 6.95122 11.6583 6.95122 11.8535 7.14648L14.3535 9.64648C14.5488 9.84175 14.5488 10.1583 14.3535 10.3535L11.8535 12.8535C11.6583 13.0488 11.3417 13.0488 11.1465 12.8535C10.9512 12.6583 10.9512 12.3417 11.1465 12.1465L12.793 10.5H6.5C6.22386 10.5 6 10.2761 6 10C6 9.72386 6.22386 9.5 6.5 9.5H12.793L11.1465 7.85352L11.082 7.77539C10.9539 7.58131 10.9756 7.31735 11.1465 7.14648Z" />
				</svg>
			);
	}
};

IconTransitionFilled.iconName = "transition--filled";

export default IconTransitionFilled;
