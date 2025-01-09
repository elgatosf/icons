import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDialRotateCWFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M18.5 3A.75.75 0 0 1 20 3v4.17a.75.75 0 0 1-1.28.53l-.71-.71a8.503 8.503 0 0 0-12.02 0 .75.75 0 0 1-1.061-1.061A10 10 0 0 1 18.5 5.4z" />
			<path
				fillRule="evenodd"
				d="M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0m10.78-3.78a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDialRotateCWFilled.iconName = "dial-rotate-c-w--filled";

export default IconDialRotateCWFilled;
