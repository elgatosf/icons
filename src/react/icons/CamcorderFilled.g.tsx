import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCamcorderFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M18 6C18 4.89543 17.1046 4 16 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H16C17.1046 20 18 19.1046 18 18V16.0415L20.75 17.6292C21.75 18.2065 23 17.4848 23 16.3301V7.66987C23 6.51517 21.75 5.79348 20.75 6.37084L18 7.95855V6Z"
			/>
		</svg>
	);
};

IconCamcorderFilled.iconName = "camcorder--filled";

export default IconCamcorderFilled;
