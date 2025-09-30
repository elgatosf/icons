import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMarginIncrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M19.5 8H17.5V11C16.9837 11 16.4815 11.0602 16 11.1739V8L8 8V16H11.1739C11.0602 16.4815 11 16.9837 11 17.5H8V19.5H11.3135C11.4858 20.0335 11.7253 20.5368 12.0218 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V12.0218C20.5368 11.7253 20.0335 11.4858 19.5 11.3135V8ZM19 4.5H17.5V6.5H19.5V5C19.5 4.72386 19.2761 4.5 19 4.5ZM16 6.5V4.5H8V6.5L16 6.5ZM6.5 6.5V4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V6.5H6.5ZM4.5 8H6.5V16H4.5V8ZM4.5 17.5H6.5V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V17.5Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM14.0001 17.5C14.0001 17.2239 14.2239 17 14.5001 17H20.5001C20.7762 17 21.0001 17.2239 21.0001 17.5C21.0001 17.7761 20.7762 18 20.5001 18H14.5001C14.2239 18 14.0001 17.7761 14.0001 17.5Z"
			/>
		</svg>
	);
};

IconMarginIncrease.iconName = "margin-increase";

export default IconMarginIncrease;
