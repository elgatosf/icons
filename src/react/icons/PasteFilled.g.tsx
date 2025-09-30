import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPasteFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.06301 3C6.28503 2.13739 7.06808 1.5 8 1.5H11C11.9319 1.5 12.715 2.13739 12.937 3H14.25C15.2165 3 16 3.7835 16 4.75C16 5.7165 16 6.5 16 6.5H10C8.067 6.5 6.5 8.067 6.5 10C6.5 12 6.5 14 6.5 16C6.5 16 5.27295 16 4.75 16C3.7835 16 3 15.2165 3 14.25V5C3 3.89543 3.89543 3 5 3H6.06301ZM8 3H11C11.2761 3 11.5 3.22386 11.5 3.5V4C11.5 4.27614 11.2761 4.5 11 4.5H8C7.72386 4.5 7.5 4.27614 7.5 4V3.5C7.5 3.22386 7.72386 3 8 3Z"
			/>
			<path d="M8 10C8 8.89543 8.89543 8 10 8H19C20.1046 8 21 8.89543 21 10V19C21 20.1046 20.1046 21 19 21H10C8.89543 21 8 20.1046 8 19V10Z" />
		</svg>
	);
};

IconPasteFilled.iconName = "paste--filled";

export default IconPasteFilled;
