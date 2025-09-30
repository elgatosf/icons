import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBlindsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M19 3C20.1046 3 21 3.89543 21 5V6C21 6.93173 20.3624 7.71244 19.5 7.93457V15.0654C20.3623 15.2877 21 16.0683 21 17V19C21 20.0357 20.2128 20.887 19.2041 20.9893L19 21H18.5L18.2959 20.9893C17.3543 20.8938 16.6062 20.1457 16.5107 19.2041L16.5 19V17C16.5 16.0683 17.1377 15.2877 18 15.0654V8H5L4.7959 7.98926C3.85435 7.8938 3.1062 7.14565 3.01074 6.2041L3 6V5C3 3.89543 3.89543 3 5 3H19Z"
			/>
			<path d="M14.25 18.5C14.6642 18.5 15 18.8358 15 19.25C15 19.6642 14.6642 20 14.25 20H4.75C4.33579 20 4 19.6642 4 19.25C4 18.8358 4.33579 18.5 4.75 18.5H14.25Z" />
			<path d="M14.25 14.5C14.6642 14.5 15 14.8358 15 15.25C15 15.6642 14.6642 16 14.25 16H4.75C4.33579 16 4 15.6642 4 15.25C4 14.8358 4.33579 14.5 4.75 14.5H14.25Z" />
			<path d="M14.25 10.5C14.6642 10.5 15 10.8358 15 11.25C15 11.6642 14.6642 12 14.25 12H4.75C4.33579 12 4 11.6642 4 11.25C4 10.8358 4.33579 10.5 4.75 10.5H14.25Z" />
		</svg>
	);
};

IconBlindsFilled.iconName = "blinds--filled";

export default IconBlindsFilled;
