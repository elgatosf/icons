import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMarginXDecrease = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16 4.5H8V19.5H11.3135C11.4858 20.0335 11.7253 20.5368 12.0218 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V12.0218C20.5368 11.7253 20.0335 11.4858 19.5 11.3135V5C19.5 4.72386 19.2761 4.5 19 4.5H17.5V11C16.9837 11 16.4815 11.0602 16 11.1739V4.5ZM5 4.5H6.5V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM14.5001 17C14.2239 17 14.0001 17.2239 14.0001 17.5C14.0001 17.7761 14.2239 18 14.5001 18H20.5001C20.7762 18 21.0001 17.7761 21.0001 17.5C21.0001 17.2239 20.7762 17 20.5001 17H14.5001Z"
			/>
		</svg>
	);
};

IconMarginXDecrease.iconName = "margin-x-decrease";

export default IconMarginXDecrease;
