import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSheetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7.999 6.75C7.44727 6.75 7 7.19827 7 7.75C7 8.30173 7.44727 8.75 7.999 8.75C8.55073 8.75 8.998 8.30173 8.998 7.75C8.998 7.19827 8.55073 6.75 7.999 6.75ZM11.25 7C10.8358 7 10.5 7.33579 10.5 7.75C10.5 8.16421 10.8358 8.5 11.25 8.5H16.25C16.6642 8.5 17 8.16421 17 7.75C17 7.33579 16.6642 7 16.25 7H11.25ZM7.999 10.75C7.44727 10.75 7 11.1983 7 11.75C7 12.3017 7.44727 12.75 7.999 12.75C8.55073 12.75 8.998 12.3017 8.998 11.75C8.998 11.1983 8.55073 10.75 7.999 10.75ZM11.25 11C10.8358 11 10.5 11.3358 10.5 11.75C10.5 12.1642 10.8358 12.5 11.25 12.5H16.25C16.6642 12.5 17 12.1642 17 11.75C17 11.3358 16.6642 11 16.25 11H11.25ZM7.999 14.75C7.44727 14.75 7 15.1983 7 15.75C7 16.3017 7.44727 16.75 7.999 16.75C8.55073 16.75 8.998 16.3017 8.998 15.75C8.998 15.1983 8.55073 14.75 7.999 14.75ZM11.25 15C10.8358 15 10.5 15.3358 10.5 15.75C10.5 16.1642 10.8358 16.5 11.25 16.5H16.25C16.6642 16.5 17 16.1642 17 15.75C17 15.3358 16.6642 15 16.25 15H11.25Z"
			/>
		</svg>
	);
};

IconSheetFilled.iconName = "sheet--filled";

export default IconSheetFilled;
