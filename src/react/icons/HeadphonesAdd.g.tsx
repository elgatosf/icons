import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHeadphonesAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.5 12a8.5 8.5 0 0 1 16.996-.27A6.5 6.5 0 0 1 22 12.81V12c0-5.523-4.477-10-10-10S2 6.477 2 12v5.25a.75.75 0 0 0 1.5 0z" />
			<path
				fillRule="evenodd"
				d="M5 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2-.5h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconHeadphonesAdd.iconName = "headphones-add";

export default IconHeadphonesAdd;
