import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMarginYSet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 19C3 20.1046 3.89543 21 5 21H12.0218C11.7253 20.5368 11.4858 20.0335 11.3135 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V17.5L11 17.5C11 16.9837 11.0602 16.4815 11.1739 16H4.5L4.5 8L19.5 8V11.3135C20.0335 11.4858 20.5368 11.7253 21 12.0218V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19ZM4.5 6.5L19.5 6.5V5C19.5 4.72386 19.2761 4.5 19 4.5L5 4.5C4.72386 4.5 4.5 4.72386 4.5 5L4.5 6.5Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM19.5001 14.9999C19.7762 14.9999 20.0001 15.2238 20.0001 15.4999V18.3284C20.0001 18.6045 19.7762 18.8284 19.5001 18.8284C19.2239 18.8284 19.0001 18.6045 19.0001 18.3284V16.707L15.8535 19.8536C15.6582 20.0489 15.3416 20.0489 15.1464 19.8536C14.9511 19.6584 14.9511 19.3418 15.1464 19.1465L18.293 15.9999H16.6716C16.3955 15.9999 16.1716 15.7761 16.1716 15.4999C16.1716 15.2238 16.3955 14.9999 16.6716 14.9999H19.5001Z"
			/>
		</svg>
	);
};

IconMarginYSet.iconName = "margin-y-set";

export default IconMarginYSet;
