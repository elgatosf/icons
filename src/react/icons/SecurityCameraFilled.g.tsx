import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSecurityCameraFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 16.3284 12.8284 17 12 17C11.1716 17 10.5 16.3284 10.5 15.5C10.5 14.6716 11.1716 14 12 14Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.25 9C19.6642 9 20 9.33579 20 9.75V12.5C20 16.9183 16.4183 21 12 21C7.58172 21 4 16.9183 4 12.5V9.75C4 9.33579 4.33579 9 4.75 9H19.25ZM12 12.5C10.3431 12.5 9 13.8431 9 15.5C9 17.1569 10.3431 18.5 12 18.5C13.6569 18.5 15 17.1569 15 15.5C15 13.8431 13.6569 12.5 12 12.5ZM16 10.5C15.4477 10.5 15 10.9477 15 11.5C15 12.0523 15.4477 12.5 16 12.5C16.5523 12.5 17 12.0523 17 11.5C17 10.9477 16.5523 10.5 16 10.5Z"
			/>
			<path d="M19 3C20.1046 3 21 3.89543 21 5V5.5C21 6.60457 20.1046 7.5 19 7.5H5C3.89543 7.5 3 6.60457 3 5.5L3 5C3 3.89543 3.89543 3 5 3H19Z" />
		</svg>
	);
};

IconSecurityCameraFilled.iconName = "security-camera--filled";

export default IconSecurityCameraFilled;
