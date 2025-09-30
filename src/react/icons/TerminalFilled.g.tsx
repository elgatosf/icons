import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTerminalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM12.75 14.5C12.3358 14.5 12 14.8358 12 15.25C12 15.6642 12.3358 16 12.75 16H16.25C16.6642 16 17 15.6642 17 15.25C17 14.8358 16.6642 14.5 16.25 14.5H12.75ZM8.28027 8.21973C7.98738 7.92686 7.51261 7.92684 7.21973 8.21973C6.92693 8.51262 6.92689 8.98741 7.21973 9.28027L9.93945 12L7.21973 14.7197L7.16797 14.7764C6.92775 15.0709 6.94518 15.5057 7.21973 15.7803C7.4943 16.0548 7.92905 16.0723 8.22363 15.832L8.28027 15.7803L11.5303 12.5303C11.8232 12.2374 11.8232 11.7626 11.5303 11.4697L8.28027 8.21973Z"
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
						d="M15 3C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H15ZM6.77539 7.08203C6.58131 6.95387 6.31735 6.97562 6.14648 7.14648C5.97562 7.31735 5.95387 7.58131 6.08203 7.77539L6.14648 7.85352L8.29297 10L6.14648 12.1465C5.95122 12.3417 5.95122 12.6583 6.14648 12.8535C6.34175 13.0488 6.65825 13.0488 6.85352 12.8535L9.35352 10.3535C9.54878 10.1583 9.54878 9.84175 9.35352 9.64648L6.85352 7.14648L6.77539 7.08203ZM10.5 12C10.2239 12 10 12.2239 10 12.5C10 12.7761 10.2239 13 10.5 13H13.5C13.7761 13 14 12.7761 14 12.5C14 12.2239 13.7761 12 13.5 12H10.5Z"
					/>
				</svg>
			);
	}
};

IconTerminalFilled.iconName = "terminal--filled";

export default IconTerminalFilled;
